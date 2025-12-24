'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.png" alt="ERVANTO HUKOLI" className="h-10 w-auto mr-3" />
              <span className="text-xl font-bold text-green-700">ERVANTO HUKOLI</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Beranda</a>
                <a href="#about" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Tentang</a>
                <a href="#products" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Produk</a>
                <a href="#contact" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Kontak</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-900 hover:text-green-600 block px-3 py-2 text-base font-medium">Beranda</a>
              <a href="#about" className="text-gray-900 hover:text-green-600 block px-3 py-2 text-base font-medium">Tentang</a>
              <a href="#products" className="text-gray-900 hover:text-green-600 block px-3 py-2 text-base font-medium">Produk</a>
              <a href="#contact" className="text-gray-900 hover:text-green-600 block px-3 py-2 text-base font-medium">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-green-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-green-700">ERVANTO HUKOLI</span>
                <br />
                Mitra Terpercaya
                <br />
                Bahan Makanan Berkualitas
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Menyediakan bahan makanan segar dan berkualitas tinggi untuk kebutuhan kuliner Anda. 
                Dengan komitmen pada kualitas dan kebersihan, kami siap menjadi mitra bisnis terpercaya Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  Hubungi Kami
                </a>
                <a 
                  href="#products"
                  className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-center"
                >
                  Lihat Produk
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/hero-food.png" 
                alt="Bahan Makanan Segar" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="text-green-700">ERVANTO HUKOLI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami adalah perusahaan yang berdedikasi dalam menyediakan bahan makanan berkualitas tinggi 
              untuk memenuhi kebutuhan kuliner Anda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/facility.png" 
                alt="Fasilitas Produksi" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Komitmen Kami</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                      <span className="text-xl">✓</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Kualitas Terbaik</h4>
                    <p className="text-gray-600">Hanya menyediakan produk berkualitas tinggi dengan standar kebersihan yang ketat.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 text-orange-600">
                      <span className="text-xl">✓</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Ke segaran Terjamin</h4>
                    <p className="text-gray-600">Produk selalu segar karena proses penanganan dan penyimpanan yang optimal.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                      <span className="text-xl">✓</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Pelayanan Prima</h4>
                    <p className="text-gray-600">Tim profesional siap melayani kebutuhan Anda dengan cepat dan responsif.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produk Unggulan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai jenis bahan makanan berkualitas untuk memenuhi kebutuhan kuliner Anda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white text-6xl">🥬</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sayuran Segar</h3>
                <p className="text-gray-600 mb-4">Berbagai jenis sayuran segar langsung dari petani terpercaya.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Sayuran hijau organik</li>
                  <li>• Sayuran import berkualitas</li>
                  <li>• Sayuran lokal segar</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <span className="text-white text-6xl">🌾</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bahan Pokok</h3>
                <p className="text-gray-600 mb-4">Kebutuhan pokok berkualitas dengan harga yang kompetitif.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Berbagai jenis beras</li>
                  <li>• Tepung terigu premium</li>
                  <li>• Gula dan garam</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <span className="text-white text-6xl">🧂</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bumbu & Rempah</h3>
                <p className="text-gray-600 mb-4">Rempah-rempah berkualitas untuk cita rasa masakan yang sempurna.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Rempah segar</li>
                  <li>• Bumbu instan premium</li>
                  <li>• Rempah kering import</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi <span className="text-green-700">ERVANTO HUKOLI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap melayani kebutuhan bahan makanan berkualitas untuk bisnis Anda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Alamat</h4>
                    <p className="text-gray-600">
                      DUSUN TOMBIU DESA TIOHU<br />
                      Desa/Kelurahan Tiohu, Kec. Asparaga<br />
                      Kab. Gorontalo, Provinsi Gorontalo<br />
                      Kode Pos: 96218
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Telepon</h4>
                    <p className="text-gray-600">085353887447</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@ervantohukoli.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Jam Operasional</h4>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Senin - Sabtu:</strong> 08:00 - 17:00<br />
                    <strong>Minggu:</strong> 09:00 - 15:00
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Kirim Pesan</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tuliskan pesan Anda..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="ERVANTO HUKOLI" className="h-8 w-auto mr-3" />
                <span className="text-xl font-bold">ERVANTO HUKOLI</span>
              </div>
              <p className="text-gray-400 mb-4">
                Mitra terpercaya untuk kebutuhan bahan makanan berkualitas tinggi. 
                Komitmen kami adalah kepuasan pelanggan dengan produk segar dan pelayanan prima.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Tentang</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Produk</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 <span className="text-green-400 font-semibold">ERVANTO HUKOLI</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}