"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Heart, Star, Phone, Mail, Globe, Instagram, Facebook, Menu, MessageCircle, Eye, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Component() {
  const products = [
    {
      id: 1,
      name: "Portrait Floral Elegance Tote",
      price: "PKR 3,000",
      size: "Large",
      category: "Tote Bags",
      image: "/images/products/portrait-floral-tote.jpeg",
      tag: "PORT-FLORAL-001",
      description: "Elegant brown tote with ornate floral patterns and portrait centerpiece",
      rating: 5,
      isNew: true,
    },
    {
      id: 2,
      name: "Geometric Diamond Tote",
      price: "PKR 2,000",
      size: "Small",
      category: "Tote Bags",
      image: "/images/products/geometric-diamond-tote.jpeg",
      tag: "GEO-DIAMOND-002",
      description: "Gray tote with vibrant geometric diamond pattern and colorful tassels",
      rating: 5,
      isNew: false,
    },
    {
      id: 3,
      name: "Ocean Shells Paradise Tote",
      price: "PKR 3,000",
      size: "Large",
      category: "Tote Bags",
      image: "/images/products/ocean-shells-tote.jpeg",
      tag: "OCEAN-SHELL-003",
      description: "Black tote featuring beautiful ocean waves and seashell artwork",
      rating: 5,
      isNew: true,
    },
    {
      id: 4,
      name: "Sunset Beach Scene Tote",
      price: "PKR 2,000",
      size: "Small",
      category: "Tote Bags",
      image: "/images/products/sunset-beach-tote.jpeg",
      tag: "SUNSET-BEACH-004",
      description: "Cream tote with stunning sunset beach painting and rope handles",
      rating: 5,
      isNew: false,
    },
    {
      id: 5,
      name: "Tropical Plumeria Tote",
      price: "PKR 2,000",
      size: "Small",
      category: "Tote Bags",
      image: "/images/products/tropical-plumeria-tote.jpeg",
      tag: "TROPICAL-PLUM-005",
      description: "Beige tote with hand-painted tropical plumeria flowers and leaves",
      rating: 5,
      isNew: true,
    },
    {
      id: 6,
      name: "Strawberry Characters Tote",
      price: "PKR 3,000",
      size: "Large",
      category: "Tote Bags",
      image: "/images/products/strawberry-characters-tote.jpeg",
      tag: "STRAWBERRY-CHAR-006",
      description: "White tote with adorable strawberry characters and green leaf design",
      rating: 5,
      isNew: false,
    },
    {
      id: 7,
      name: "Abstract Portrait Art Tote",
      price: "PKR 3,000",
      size: "Large",
      category: "Tote Bags",
      image: "/images/products/abstract-portrait-tote.jpeg",
      tag: "ABS-PORTRAIT-007",
      description: "White tote featuring modern abstract portrait in red, black and white",
      rating: 5,
      isNew: true,
    },
    {
      id: 8,
      name: "3D Roses Navy Tote",
      price: "PKR 3,000",
      size: "Large",
      category: "Tote Bags",
      image: "/images/products/3d-roses-navy-tote.jpeg",
      tag: "3D-ROSES-NAVY-008",
      description: "Navy blue tote with 3D fabric roses and decorative rope handles",
      rating: 5,
      isNew: false,
    },
    {
      id: 9,
      name: "Floral Hair Portrait Tote",
      price: "PKR 3,000",
      size: "Large",
      category: "Tote Bags",
      image: "/images/products/floral-hair-portrait-tote.jpeg",
      tag: "FLORAL-HAIR-009",
      description: "Red and white tote with elegant woman portrait and floral hair decoration",
      rating: 5,
      isNew: true,
    },
    {
      id: 10,
      name: "Orange Characters Tote",
      price: "PKR 2,000",
      size: "Small",
      category: "Tote Bags",
      image: "/images/products/orange-characters-tote.jpeg",
      tag: "ORANGE-CHAR-010",
      description: "White tote with cute orange fruit characters and green leaf patterns",
      rating: 5,
      isNew: false,
    },
  ]

  const categories = [
    { name: "Artistic Portraits", count: 4, image: "/images/products/portrait-floral-tote.jpeg" },
    { name: "Nature & Floral", count: 3, image: "/images/products/tropical-plumeria-tote.jpeg" },
    { name: "Character Designs", count: 3, image: "/images/products/strawberry-characters-tote.jpeg" },
  ]

  const handleWhatsAppInquiry = (product: (typeof products)[0]) => {
    const message = `Hi! I'd like to inquire about this product:

🛍️ *${product.name}*
🏷️ *Product Tag: ${product.tag}*
💰 Price: ${product.price}
📏 Size: ${product.size}
📂 Category: ${product.category}
🆔 Product ID: ${product.id}
📝 Design: ${product.description}

I'm interested in learning more about:
- Material and dimensions
- Availability
- Shipping options
- Any customization options

*Please refer to product tag "${product.tag}" for the exact design I'm viewing.*

Thank you!`
    const whatsappUrl = `https://wa.me/923051966667?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleWhatsAppPurchase = (product: (typeof products)[0]) => {
    const message = `Hi! I would like to purchase this product:

🛍️ *${product.name}*
🏷️ *Product Tag: ${product.tag}*
💰 Price: ${product.price}
📏 Size: ${product.size}
📂 Category: ${product.category}
🆔 Product ID: ${product.id}
📝 Design: ${product.description}

Please confirm:
- Final price including shipping
- Payment methods accepted
- Delivery timeline
- Order process

*Please refer to product tag "${product.tag}" for the exact design I want to purchase.*

I'm ready to place the order. Thank you!`
    const whatsappUrl = `https://wa.me/923051966667?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleCategoryInquiry = (category: (typeof categories)[0]) => {
    const message = `Hi! I'm interested in your ${category.name} collection. Can you show me all available options in this category? I'd like to know about pricing, availability, and any special offers. Thank you!`
    const whatsappUrl = `https://wa.me/923051966667?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-black/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/images/gulnora-logo.png"
                alt="Gulnora Creations Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-300 hover:text-white font-medium transition-colors">
                Home
              </Link>
              <Link href="#products" className="text-gray-300 hover:text-white font-medium transition-colors">
                Products
              </Link>
              <Link href="#categories" className="text-gray-300 hover:text-white font-medium transition-colors">
                Categories
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white font-medium transition-colors">
                Contact
              </Link>
            </div>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-gray-300">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-gray-900">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="#" className="text-gray-300 hover:text-white font-medium">
                    Home
                  </Link>
                  <Link href="#products" className="text-gray-300 hover:text-white font-medium">
                    Products
                  </Link>
                  <Link href="#categories" className="text-gray-300 hover:text-white font-medium">
                    Categories
                  </Link>
                  <Link href="#contact" className="text-gray-300 hover:text-white font-medium">
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/images/gulnora-logo.png"
              alt="Gulnora Creations Logo"
              width={300}
              height={120}
              className="mx-auto mb-6"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6">Handcrafted with Love</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover our collection of beautifully handmade bags, each piece crafted with care and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="text-center">
              <p className="text-gray-300 text-sm mb-1">Small Bags</p>
              <p className="text-white text-2xl font-bold">PKR 2,000</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <p className="text-gray-300 text-sm mb-1">Large Bags</p>
              <p className="text-white text-2xl font-bold">PKR 3,000</p>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-medium transition-colors"
            onClick={() => {
              const message =
                "Hi! I'm interested in your handmade bag collection. Can you please show me what's available?"
              const whatsappUrl = `https://wa.me/923051966667?text=${encodeURIComponent(message)}`
              window.open(whatsappUrl, "_blank")
            }}
          >
            Shop Now
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 text-center mb-12">Shop by Style</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group bg-white border border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="relative cursor-pointer group">
                          <Image
                            src={category.image || "/placeholder.svg"}
                            alt={category.name}
                            width={200}
                            height={200}
                            className="w-full h-48 object-contain bg-white group-hover:scale-105 transition-transform"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl p-0 bg-transparent border-none">
                        <div className="relative">
                          <Image
                            src={category.image || "/placeholder.svg"}
                            alt={category.name}
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain bg-white rounded-lg max-h-96"
                          />
                          <DialogClose asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full"
                            >
                              <X className="h-6 w-6" />
                            </Button>
                          </DialogClose>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.count} items</p>
                  <Button
                    onClick={() => handleCategoryInquiry(category)}
                    className="w-full bg-black text-white hover:bg-gray-800 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Inquire About Collection
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group bg-white border border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="relative cursor-pointer group">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="w-full h-64 object-contain bg-white group-hover:scale-105 transition-transform"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                        <div className="relative">
                          <div className="bg-white rounded-lg p-6">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              width={800}
                              height={600}
                              className="w-full h-auto object-contain bg-white rounded-lg mb-4 max-h-96"
                            />
                            <div className="text-center space-y-2">
                              <h3 className="text-2xl font-semibold text-gray-900">{product.name}</h3>
                              <p className="text-lg font-mono text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block">
                                {product.tag}
                              </p>
                              <div className="flex items-center justify-center gap-4">
                                <p className="text-xl font-bold text-gray-900">{product.price}</p>
                                <Badge variant="outline" className="text-sm">
                                  {product.size}
                                </Badge>
                              </div>
                              <p className="text-gray-600">{product.category}</p>
                              <p className="text-sm text-gray-500 italic">{product.description}</p>
                              <div className="flex items-center justify-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < product.rating ? "text-gray-800 fill-current" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <DialogClose asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full"
                            >
                              <X className="h-6 w-6" />
                            </Button>
                          </DialogClose>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {product.isNew && (
                      <Badge className="absolute top-3 left-3 bg-black text-white hover:bg-gray-800">New</Badge>
                    )}
                    <Badge className="absolute top-3 right-3 bg-gray-800 text-white text-xs font-mono">
                      {product.tag}
                    </Badge>
                    <Badge
                      className={`absolute bottom-3 left-3 text-xs ${
                        product.size === "Large" ? "bg-blue-600 text-white" : "bg-green-600 text-white"
                      }`}
                    >
                      {product.size}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute bottom-3 right-3 bg-white/80 hover:bg-white text-gray-600 hover:text-black"
                      onClick={(e) => {
                        e.stopPropagation()
                        // Handle wishlist functionality here if needed
                      }}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < product.rating ? "text-gray-800 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded mb-2 inline-block">
                      {product.tag}
                    </p>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-600">{product.category}</p>
                      <Badge variant="outline" className="text-xs">
                        {product.size}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500 mb-3 italic">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold text-gray-900">{product.price}</span>
                    </div>

                    {/* WhatsApp Action Buttons */}
                    <div className="space-y-2">
                      <Button
                        onClick={() => handleWhatsAppInquiry(product)}
                        variant="outline"
                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Inquire More Details
                      </Button>
                      <Button
                        onClick={() => handleWhatsAppPurchase(product)}
                        className="w-full bg-green-600 text-white hover:bg-green-700 transition-colors"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Send Purchase Request
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-700">92-305-1966667</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-700">gulnora.isma@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Website</p>
                  <p className="text-gray-700">gulnoracreations.com</p>
                </div>
              </div>

              <div className="pt-6">
                <p className="font-medium text-gray-900 mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 bg-transparent"
                    onClick={() => window.open("https://www.instagram.com/gulnoraisma/", "_blank")}
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 bg-transparent"
                    onClick={() => window.open("https://www.facebook.com/profile.php?id=61578798620764", "_blank")}
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Quick Access</h3>
                <p className="text-gray-700 mb-6">Scan the QR code for easy access to our store</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer">
                      <Image
                        src="/images/gulnora-qr.png"
                        alt="QR Code for Gulnora Creations"
                        width={200}
                        height={200}
                        className="mx-auto rounded-lg hover:scale-105 transition-transform"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-md p-0 bg-transparent border-none">
                    <div className="relative">
                      <div className="bg-white rounded-lg p-4">
                        <Image
                          src="/images/gulnora-qr.png"
                          alt="QR Code for Gulnora Creations"
                          width={400}
                          height={400}
                          className="w-full h-auto object-contain rounded-lg"
                        />
                      </div>
                      <DialogClose asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                        >
                          <X className="h-6 w-6" />
                        </Button>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/images/gulnora-logo.png"
            alt="Gulnora Creations Logo"
            width={180}
            height={60}
            className="mx-auto mb-6"
          />
          <p className="text-gray-300 mb-6">Handcrafted bags made with love and attention to detail</p>
          <div className="flex justify-center space-x-6 mb-6">
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-gray-300 hover:text-white transition-colors">Privacy Policy</button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold text-gray-900 mb-4">🔒 Privacy Policy</DialogTitle>
                  <div className="text-gray-600 space-y-4">
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Eye className="h-5 w-5 text-amber-600 mr-2" />
                        <span className="font-medium text-amber-800">Artwork & Design Protection</span>
                      </div>
                      <p className="text-amber-700 text-sm mb-3">
                        All designs, artwork, and creative styles displayed on this website are the exclusive
                        intellectual property of Gulnora Creations.
                      </p>
                      <div className="space-y-2 text-sm text-amber-700">
                        <p>
                          • <strong>Copyright Protected:</strong> All designs are original and copyrighted
                        </p>
                        <p>
                          • <strong>No Copying Allowed:</strong> Reproduction of artwork is strictly prohibited
                        </p>
                        <p>
                          • <strong>Style Protection:</strong> Copying our unique style is not permitted
                        </p>
                        <p>
                          • <strong>Legal Action:</strong> Unauthorized copying may lead to litigation
                        </p>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <X className="h-4 w-4 text-red-600 mr-2" />
                        <span className="font-medium text-red-800 text-sm">Legal Warning</span>
                      </div>
                      <p className="text-red-700 text-xs">
                        Any unauthorized reproduction, copying, or imitation of our designs, artwork, or creative style
                        will result in immediate legal action. We actively protect our intellectual property rights.
                      </p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <MessageCircle className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="font-medium text-blue-800 text-sm">Questions About Usage?</span>
                      </div>
                      <p className="text-blue-700 text-xs">
                        If you have questions about licensing or authorized use of our designs, please contact us
                        directly.
                      </p>
                    </div>

                    <div className="text-center pt-4">
                      <Button
                        onClick={() => {
                          const message =
                            "Hi! I have questions about licensing or authorized use of your designs. Can you provide more information? Thank you!"
                          const whatsappUrl = `https://wa.me/923051966667?text=${encodeURIComponent(message)}`
                          window.open(whatsappUrl, "_blank")
                        }}
                        className="bg-blue-600 text-white hover:bg-blue-700 w-full"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Contact About Licensing
                      </Button>
                    </div>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-gray-300 hover:text-white transition-colors">Terms of Service</button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold text-gray-900 mb-4">📋 Terms of Service</DialogTitle>
                  <div className="text-gray-600 space-y-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <X className="h-5 w-5 text-red-600 mr-2" />
                        <span className="font-medium text-red-800">No Returns • No Exchanges</span>
                      </div>
                      <p className="text-red-700 text-sm mb-3">
                        All sales are final. We do not accept returns or exchanges on any handmade products.
                      </p>
                      <div className="space-y-2 text-sm text-red-700">
                        <p>
                          • <strong>Final Sale:</strong> All purchases are considered final
                        </p>
                        <p>
                          • <strong>Quality Assurance:</strong> Each item is carefully inspected before shipping
                        </p>
                        <p>
                          • <strong>Custom Orders:</strong> Made-to-order items cannot be returned
                        </p>
                        <p>
                          • <strong>Questions:</strong> Please ask all questions before purchasing
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <MessageCircle className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="font-medium text-blue-800 text-sm">Need Help?</span>
                      </div>
                      <p className="text-blue-700 text-xs">
                        Contact us on WhatsApp before purchasing if you have any questions about size, material, or
                        design.
                      </p>
                    </div>

                    <div className="text-center pt-4">
                      <Button
                        onClick={() => {
                          const message =
                            "Hi! I have questions about a product before making a purchase. Can you help me with the details? Thank you!"
                          const whatsappUrl = `https://wa.me/923051966667?text=${encodeURIComponent(message)}`
                          window.open(whatsappUrl, "_blank")
                        }}
                        className="bg-blue-600 text-white hover:bg-blue-700 w-full"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Ask Questions Before Purchase
                      </Button>
                    </div>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-gray-300 hover:text-white transition-colors">Shipping Info</button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold text-gray-900 mb-4">
                    📦 Shipping & Order Information
                  </DialogTitle>
                  <div className="text-gray-600 space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <MessageCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span className="font-medium text-green-800">WhatsApp Orders Only</span>
                      </div>
                      <p className="text-green-700 text-sm mb-3">
                        All orders and queries are processed exclusively through WhatsApp for personalized service and
                        quick communication.
                      </p>
                      <div className="space-y-2 text-sm text-green-700">
                        <p>
                          • <strong>Order Process:</strong> Send product details via WhatsApp
                        </p>
                        <p>
                          • <strong>Payment:</strong> Confirmed through WhatsApp chat
                        </p>
                        <p>
                          • <strong>Shipping:</strong> Arranged after order confirmation
                        </p>
                        <p>
                          • <strong>Tracking:</strong> Updates sent via WhatsApp
                        </p>
                      </div>
                    </div>

                    <div className="text-center pt-4">
                      <Button
                        onClick={() => {
                          const message =
                            "Hi! I'd like to know more about your shipping process and how to place an order. Thank you!"
                          const whatsappUrl = `https://wa.me/923051966667?text=${encodeURIComponent(message)}`
                          window.open(whatsappUrl, "_blank")
                        }}
                        className="bg-green-600 text-white hover:bg-green-700 w-full"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Contact Us on WhatsApp
                      </Button>
                    </div>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <p className="text-gray-400 text-sm">© 2024 Gulnora Creations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
