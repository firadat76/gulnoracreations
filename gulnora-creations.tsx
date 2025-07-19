"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import {
  Heart,
  ShoppingBag,
  Star,
  Phone,
  Mail,
  Globe,
  Instagram,
  Facebook,
  Menu,
  MessageCircle,
  Eye,
  X,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Component() {
  const products = [
    {
      id: 1,
      name: "Traditional Weave Tote",
      price: "PKR 4,000",
      category: "Tote Bags",
      image: "/images/products/traditional-weave-tote.jpeg",
      rating: 5,
      isNew: true,
    },
    {
      id: 2,
      name: "Abstract Swirl Tote",
      price: "PKR 2,500",
      category: "Tote Bags",
      image: "/images/products/abstract-swirl-tote.jpeg",
      rating: 5,
      isNew: false,
    },
    {
      id: 3,
      name: "3D Floral Roses Tote",
      price: "PKR 4,000",
      category: "Tote Bags",
      image: "/images/products/floral-roses-tote.jpeg",
      rating: 5,
      isNew: true,
    },
    {
      id: 4,
      name: "Strawberry Delight Tote",
      price: "PKR 2,500",
      category: "Tote Bags",
      image: "/images/products/strawberry-tote.jpeg",
      rating: 5,
      isNew: false,
    },
    {
      id: 5,
      name: "Sunflower Garden Tote",
      price: "PKR 4,000",
      category: "Tote Bags",
      image: "/images/products/sunflower-tote.jpeg",
      rating: 5,
      isNew: true,
    },
    {
      id: 6,
      name: "Butterfly Dreams Tote",
      price: "PKR 4,000",
      category: "Tote Bags",
      image: "/images/products/butterfly-tote.jpeg",
      rating: 5,
      isNew: false,
    },
  ]

  const categories = [
    { name: "Artistic Designs", count: 4, image: "/images/products/abstract-swirl-tote.jpeg" },
    { name: "Floral Collection", count: 3, image: "/images/products/sunflower-tote.jpeg" },
    { name: "Traditional Crafts", count: 2, image: "/images/products/traditional-weave-tote.jpeg" },
  ]

  const handleWhatsAppInquiry = (product: (typeof products)[0]) => {
    const message = `Hi! I'd like to inquire about the ${product.name} (${product.price}). Can you please provide more details about:
- Material and dimensions
- Availability
- Shipping options
- Any customization options

Thank you!`
    const whatsappUrl = `https://wa.me/923051966667?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleWhatsAppPurchase = (product: (typeof products)[0]) => {
    const message = `Hi! I would like to purchase the ${product.name} (${product.price}). 

Please confirm:
- Final price including shipping
- Payment methods accepted
- Delivery timeline
- Order process

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

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <ShoppingBag className="h-5 w-5" />
              </Button>
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
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
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
                            className="w-full h-auto object-contain rounded-lg"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
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
                              className="w-full h-auto object-contain rounded-lg mb-4"
                            />
                            <div className="text-center space-y-2">
                              <h3 className="text-2xl font-semibold text-gray-900">{product.name}</h3>
                              <p className="text-xl font-bold text-gray-900">{product.price}</p>
                              <p className="text-gray-600">{product.category}</p>
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
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-600 hover:text-black"
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
                    <p className="text-sm text-gray-600 mb-2">{product.category}</p>
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
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 bg-transparent"
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
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              Shipping Info
            </Link>
          </div>
          <p className="text-gray-400 text-sm">© 2024 Gulnora Creations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
