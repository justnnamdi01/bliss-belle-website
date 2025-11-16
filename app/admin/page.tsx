"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Package, Bell, Loader2 } from "lucide-react"
import { Header } from "@/components/header"

interface Order {
  id: string
  order_number: string
  status: string
  total_amount: number
  created_at: string
  customers: {
    full_name: string
    email: string
    phone: string
  }
  shipping_address: {
    address: string
    city: string
    state: string
    pincode: string
  }
}

interface Notification {
  id: string
  title: string
  message: string
  promo_code: string | null
  is_active: boolean
}

const ADMIN_PASSWORD = "BlissBelles2024" // Change this to your desired password

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [orders, setOrders] = useState<Order[]>([])
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      // Store authentication in sessionStorage
      sessionStorage.setItem("admin_authenticated", "true")
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password. Please try again.",
        variant: "destructive",
      })
      setPassword("")
    }
  }

  useEffect(() => {
    // Check if already authenticated
    const authStatus = sessionStorage.getItem("admin_authenticated")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  const [newNotification, setNewNotification] = useState({
    title: "",
    message: "",
    promo_code: "",
    is_active: true,
  })

  useEffect(() => {
    if (isAuthenticated) {
      fetchOrders()
      fetchNotifications()
    }
  }, [isAuthenticated])

  const fetchOrders = async () => {
    setIsLoading(true)
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      if (!supabaseUrl || !supabaseKey) {
        toast({
          title: "Supabase not configured",
          description: "Please configure Supabase environment variables in .env.local",
          variant: "destructive",
        })
        setOrders([])
        setIsLoading(false)
        return
      }

      const supabase = createClient()
      const { data, error } = await supabase
        .from("orders")
        .select("*, customers(*)")
        .order("created_at", { ascending: false })

      if (error) {
        console.error("Supabase error:", error)
        toast({
          title: "Error fetching orders",
          description: error.message || "Please check your Supabase configuration",
          variant: "destructive",
        })
        setOrders([])
        return
      }
      
      console.log("Fetched orders:", data) // Debug log
      setOrders(data || [])
      
      if (data && data.length === 0) {
        console.log("No orders found in database. Make sure to place an order through checkout first.")
      }
    } catch (error: any) {
      console.error("[v0] Error fetching orders:", error)
      toast({
        title: "Error fetching orders",
        description: error?.message || "Please refresh the page or check console for details",
        variant: "destructive",
      })
      setOrders([])
    } finally {
      setIsLoading(false)
    }
  }

  const fetchNotifications = async () => {
    try {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        setNotifications([])
        return
      }

      const supabase = createClient()
      const { data, error } = await supabase.from("notifications").select("*").order("created_at", { ascending: false })

      if (error) throw error
      setNotifications(data || [])
    } catch (error) {
      console.error("[v0] Error fetching notifications:", error)
    }
  }

  const updateOrderStatus = async (orderId: string, status: string) => {
    try {
      const supabase = createClient()
      const { error } = await supabase
        .from("orders")
        .update({ status, updated_at: new Date().toISOString() })
        .eq("id", orderId)

      if (error) throw error

      toast({
        title: "Order updated",
        description: "Order status has been updated successfully",
      })
      fetchOrders()
    } catch (error) {
      console.error("[v0] Error updating order:", error)
      toast({
        title: "Error updating order",
        description: "Please try again",
        variant: "destructive",
      })
    }
  }

  const createNotification = async () => {
    if (!newNotification.title || !newNotification.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    try {
      const supabase = createClient()
      const { error } = await supabase.from("notifications").insert({
        title: newNotification.title,
        message: newNotification.message,
        promo_code: newNotification.promo_code || null,
        is_active: newNotification.is_active,
      })

      if (error) throw error

      toast({
        title: "Notification created",
        description: "The notification has been created successfully",
      })
      setNewNotification({ title: "", message: "", promo_code: "", is_active: true })
      fetchNotifications()
    } catch (error) {
      console.error("[v0] Error creating notification:", error)
      toast({
        title: "Error creating notification",
        description: "Please try again",
        variant: "destructive",
      })
    }
  }

  const toggleNotification = async (id: string, isActive: boolean) => {
    try {
      const supabase = createClient()
      const { error } = await supabase
        .from("notifications")
        .update({ is_active: !isActive, updated_at: new Date().toISOString() })
        .eq("id", id)

      if (error) throw error

      toast({
        title: isActive ? "Notification deactivated" : "Notification activated",
      })
      fetchNotifications()
    } catch (error) {
      console.error("[v0] Error toggling notification:", error)
      toast({
        title: "Error updating notification",
        variant: "destructive",
      })
    }
  }

  const deleteNotification = async (id: string) => {
    try {
      const supabase = createClient()
      const { error } = await supabase.from("notifications").delete().eq("id", id)

      if (error) throw error

      toast({
        title: "Notification deleted",
      })
      fetchNotifications()
    } catch (error) {
      console.error("[v0] Error deleting notification:", error)
      toast({
        title: "Error deleting notification",
        variant: "destructive",
      })
    }
  }

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#E0F4FF] flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="mt-1"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#E0F4FF]">
      <Header />
      <div className="pt-40 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-serif text-center mb-12 text-[#2C5F7F]">Admin Dashboard</h1>

          <Tabs defaultValue="orders" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="orders">
                <Package className="w-4 h-4 mr-2" />
                Orders
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </TabsTrigger>
            </TabsList>

            {/* Orders Tab */}
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="flex justify-center py-8">
                      <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
                    </div>
                  ) : orders.length === 0 ? (
                    <div className="text-center py-8">
                      <Package className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                      <p className="text-lg font-medium text-muted-foreground mb-2">No orders yet</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Orders will appear here once customers place orders through the checkout page.
                      </p>
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg max-w-md mx-auto">
                        <p className="text-sm text-blue-900 font-medium mb-2">To test the admin page:</p>
                        <ol className="text-sm text-blue-800 text-left list-decimal list-inside space-y-1">
                          <li>Add products to cart from the products page</li>
                          <li>Go to checkout and complete an order</li>
                          <li>Return to this admin page to see the order</li>
                        </ol>
                      </div>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Order Number</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Contact</TableHead>
                            <TableHead>Address</TableHead>
                            <TableHead>Total</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {orders.map((order) => {
                            const customer = order.customers || {}
                            const shipping = order.shipping_address || {}
                            return (
                              <TableRow key={order.id}>
                                <TableCell className="font-mono">{order.order_number || "N/A"}</TableCell>
                                <TableCell>
                                  <div>
                                    <p className="font-medium">{customer.full_name || "N/A"}</p>
                                    <p className="text-sm text-muted-foreground">{customer.email || "N/A"}</p>
                                  </div>
                                </TableCell>
                                <TableCell>{customer.phone || "N/A"}</TableCell>
                                <TableCell>
                                  <div className="text-sm max-w-xs">
                                    <p>{shipping.address || "N/A"}</p>
                                    <p>
                                      {shipping.city || ""}, {shipping.state || ""} {shipping.pincode || ""}
                                    </p>
                                  </div>
                                </TableCell>
                                <TableCell className="font-semibold">₹ {order.total_amount?.toFixed(2) || "0.00"}</TableCell>
                                <TableCell>
                                  <Badge
                                    variant={
                                      order.status === "delivered"
                                        ? "default"
                                        : order.status === "cancelled"
                                          ? "destructive"
                                          : "secondary"
                                    }
                                  >
                                    {order.status || "pending"}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  {order.created_at ? new Date(order.created_at).toLocaleDateString() : "N/A"}
                                </TableCell>
                                <TableCell>
                                  <Select
                                    value={order.status || "pending"}
                                    onValueChange={(value) => updateOrderStatus(order.id, value)}
                                  >
                                    <SelectTrigger className="w-32">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="pending">Pending</SelectItem>
                                      <SelectItem value="processing">Processing</SelectItem>
                                      <SelectItem value="shipped">Shipped</SelectItem>
                                      <SelectItem value="delivered">Delivered</SelectItem>
                                      <SelectItem value="cancelled">Cancelled</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </TableCell>
                              </TableRow>
                            )
                          })}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications">
              <div className="grid gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Create New Notification</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title">Title *</Label>
                        <Input
                          id="title"
                          value={newNotification.title}
                          onChange={(e) => setNewNotification({ ...newNotification, title: e.target.value })}
                          placeholder="Special Offer!"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={newNotification.message}
                          onChange={(e) => setNewNotification({ ...newNotification, message: e.target.value })}
                          placeholder="Get 20% off your first order"
                        />
                      </div>

                      <div>
                        <Label htmlFor="promo_code">Promo Code (Optional)</Label>
                        <Input
                          id="promo_code"
                          value={newNotification.promo_code}
                          onChange={(e) => setNewNotification({ ...newNotification, promo_code: e.target.value })}
                          placeholder="WELCOME20"
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch
                          id="is_active"
                          checked={newNotification.is_active}
                          onCheckedChange={(checked) => setNewNotification({ ...newNotification, is_active: checked })}
                        />
                        <Label htmlFor="is_active">Active</Label>
                      </div>

                      <Button onClick={createNotification} className="w-full">
                        Create Notification
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Active Notifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {notifications.length === 0 ? (
                      <p className="text-center py-8 text-muted-foreground">No notifications</p>
                    ) : (
                      <div className="space-y-4">
                        {notifications.map((notification) => (
                          <Card key={notification.id}>
                            <CardContent className="pt-6">
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <h4 className="font-semibold">{notification.title}</h4>
                                    <Badge variant={notification.is_active ? "default" : "secondary"}>
                                      {notification.is_active ? "Active" : "Inactive"}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                                  {notification.promo_code && (
                                    <p className="text-sm font-mono bg-muted px-2 py-1 rounded inline-block">
                                      {notification.promo_code}
                                    </p>
                                  )}
                                </div>
                                <div className="flex gap-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => toggleNotification(notification.id, notification.is_active)}
                                  >
                                    {notification.is_active ? "Deactivate" : "Activate"}
                                  </Button>
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => deleteNotification(notification.id)}
                                  >
                                    Delete
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

