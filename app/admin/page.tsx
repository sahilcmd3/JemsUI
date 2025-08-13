"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Edit, Trash2, Package, ShoppingCart, Users, Eye, Gem, BarChart3, DollarSign } from "lucide-react"
import Image from "next/image"

export default function AdminDashboard() {
  const [isAddProductOpen, setIsAddProductOpen] = useState(false)

  const stats = [
    {
      title: "Total Revenue",
      value: "₹2,45,000",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Total Orders",
      value: "156",
      change: "+8.2%",
      icon: ShoppingCart,
      color: "text-blue-600",
    },
    {
      title: "Products",
      value: "89",
      change: "+3",
      icon: Package,
      color: "text-purple-600",
    },
    {
      title: "Customers",
      value: "1,234",
      change: "+15.3%",
      icon: Users,
      color: "text-orange-600",
    },
  ]

  const products = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: 45000,
      stock: 5,
      category: "Rings",
      status: "Active",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Pearl Drop Earrings",
      price: 8500,
      stock: 12,
      category: "Earrings",
      status: "Active",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Gold Chain Necklace",
      price: 25000,
      stock: 0,
      category: "Necklaces",
      status: "Out of Stock",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const orders = [
    {
      id: "#ORD-001",
      customer: "Priya Sharma",
      amount: 45000,
      status: "Completed",
      date: "2024-01-15",
      items: 1,
    },
    {
      id: "#ORD-002",
      customer: "Rahul Gupta",
      amount: 33500,
      status: "Processing",
      date: "2024-01-14",
      items: 2,
    },
    {
      id: "#ORD-003",
      customer: "Anita Patel",
      amount: 18000,
      status: "Shipped",
      date: "2024-01-13",
      items: 1,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gem className="h-6 w-6 text-purple-600" />
              <span className="text-xl font-bold">LuxeGems Admin</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">View Store</Button>
              <Button>Settings</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className={`text-sm ${stat.color}`}>{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Products Tab */}
          <TabsContent value="products">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Product Management</CardTitle>
                  <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Product
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Add New Product</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Product Name</Label>
                            <Input id="name" placeholder="Enter product name" />
                          </div>
                          <div>
                            <Label htmlFor="price">Price (₹)</Label>
                            <Input id="price" type="number" placeholder="0" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="category">Category</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="rings">Rings</SelectItem>
                                <SelectItem value="necklaces">Necklaces</SelectItem>
                                <SelectItem value="earrings">Earrings</SelectItem>
                                <SelectItem value="bracelets">Bracelets</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="stock">Stock Quantity</Label>
                            <Input id="stock" type="number" placeholder="0" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="description">Description</Label>
                          <Textarea id="description" placeholder="Product description" />
                        </div>
                        <div>
                          <Label htmlFor="images">Product Images</Label>
                          <Input id="images" type="file" multiple accept="image/*" />
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" onClick={() => setIsAddProductOpen(false)}>
                            Cancel
                          </Button>
                          <Button className="bg-gradient-to-r from-purple-600 to-pink-600">Add Product</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="edit-product-button hidden">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Edit Product</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="edit-name">Product Name</Label>
                            <Input id="edit-name" placeholder="Enter product name" />
                          </div>
                          <div>
                            <Label htmlFor="edit-price">Price (₹)</Label>
                            <Input id="edit-price" type="number" placeholder="0" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="edit-category">Category</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="rings">Rings</SelectItem>
                                <SelectItem value="necklaces">Necklaces</SelectItem>
                                <SelectItem value="earrings">Earrings</SelectItem>
                                <SelectItem value="bracelets">Bracelets</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="edit-stock">Stock Quantity</Label>
                            <Input id="edit-stock" type="number" placeholder="0" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="edit-description">Description</Label>
                          <Textarea id="edit-description" placeholder="Product description" />
                        </div>
                        <div>
                          <Label htmlFor="edit-images">Product Images</Label>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="border rounded p-1">
                              <Image
                                src="/placeholder.svg?height=60&width=60"
                                width={60}
                                height={60}
                                alt="Current product image"
                              />
                            </div>
                          </div>
                          <Input id="edit-images" type="file" multiple accept="image/*" />
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline">Cancel</Button>
                          <Button className="bg-gradient-to-r from-purple-600 to-pink-600">Save Changes</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              width={60}
                              height={60}
                              className="rounded-lg object-cover"
                            />
                            <span className="font-medium">{product.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>₹{product.price.toLocaleString()}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>
                          <Badge variant={product.status === "Active" ? "default" : "destructive"}>
                            {product.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                document.querySelector(".edit-product-button")?.click()
                              }}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>₹{order.amount.toLocaleString()}</TableCell>
                        <TableCell>{order.items}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.status === "Completed"
                                ? "default"
                                : order.status === "Processing"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Customers Tab */}
          <TabsContent value="customers">
            <Card>
              <CardHeader>
                <CardTitle>Customer Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Customer management features coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Sales Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    Sales chart visualization would go here
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Products</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {products.slice(0, 3).map((product) => (
                        <div key={product.id} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              width={40}
                              height={40}
                              className="rounded object-cover"
                            />
                            <span className="font-medium">{product.name}</span>
                          </div>
                          <span className="text-sm text-gray-600">₹{product.price.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">New order received</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Product updated</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm">Low stock alert</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
