import React, { useState } from "react";
import Section from "./Section";

function Gallery() {
    
        const instagramFeed = [
            // Videos/Reels
            {
                type: 'video',
                id: 'DMQ1__nvAj9',
                caption: '✨ Así preparamos nuestros famosos cupcakes ✨',
                likes: 234,
                comments: 15,
                isVideo: true
            },
            {
                type: 'video',
                id: 'DMd3k4lv_YW',
                caption: '🥮 ¿Recuerdas cuando comias leche en polvo a escondidas? 👀🥄Ese sabor que marcó nuestra infancia ahora regresa en forma de un postre cremoso, dulce y simplemente irresistible: Pavé de leche Klim. Cada cucharada es un viaje al pasado… pero mejorado 🍶✨Probarlo es recordar, compartirlo es revivir.',
                likes: 189,
                comments: 8,
                isVideo: true
            },
            
            // Fotos
            {
                type: 'video',
                id: 'DMPJDE1syeV', 
                caption: 'Aquí los amantes de las fresas 🙋🙋🙋 #fresasconchocolate🍓🍫',
                likes: 156,
                comments: 12,
                isVideo: true
            },
            {
                type: 'video',
                id: 'DMF_BwXOWMU',
                caption: 'Bailecito feliz 😌🙂‍↕️ #cat #happy #postre #tunja',
                likes: 201,
                comments: 18,
                isVideo: true
            },
            {
                type: 'video',
                id: 'DMB4KayNedR',
                caption: 'Pedidos al DM O WhatsApp 🍰🤤 #postreria #postres #reels posteria #tunja',
                likes: 178,
                comments: 9,
                isVideo: true
            },
            {
                type: 'video',
                id: 'DL8K-3ov881',
                caption: 'Preparamos todos nuestros postres con mucho amor 🥰🤤',
                likes: 223,
                comments: 21,
                isVideo: true
            }/* ,
            {
                type: 'photo',
                image: '/images/postres/macarrons.jpg',
                caption: 'Macarons de colores 🌈',
                likes: 267,
                comments: 24,
                isVideo: false,
                color: 'from-purple-100 to-pink-50'
            },
            {
                type: 'photo',
                image: '/images/postres/cheesecake.jpg',
                caption: 'Cheesecake de frutos rojos 🍒',
                likes: 195,
                comments: 14,
                isVideo: false,
                color: 'from-pink-100 to-rose-50'
            },
            {
                type: 'photo',
                image: '/images/postres/pan-dulce.jpg',
                caption: 'Pan dulce artesanal 🥖',
                likes: 142,
                comments: 7,
                isVideo: false,
                color: 'from-yellow-100 to-amber-50'
            } */
        ];
    
        return (
            <Section id="galeria" title="Galería" subtitle="Nuestro feed de Instagram">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {instagramFeed.map((post, index) => (
                post.isVideo ? (
                  // Post de Video
                  <div key={`video-${index}`} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-[4/3] w-full flex items-center justify-center p-3 bg-gradient-to-br from-blue-50 to-purple-50">
                      <blockquote 
                        className="instagram-media w-full h-full"
                        data-instgrm-permalink={`https://www.instagram.com/reel/${post.id}/`}
                        data-instgrm-version="14"
                      >
                        {/* Embed de video */}
                      </blockquote>
                    </div>
                    <div className="p-3">
                      <p className="text-sm text-gray-600 line-clamp-2">{post.caption}</p>
                      <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                        <span>❤️ {post.likes}</span>
                        <span>💬 {post.comments}</span>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">▶️ Video</span>
                    </div>
                  </div>
                ) : (
                  // Post de Foto
                  <div key={`photo-${index}`} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className={`aspect-[4/3] w-full bg-gradient-to-br ${post.color}`} />
                    <div className="p-3">
                      <p className="text-sm text-gray-600 line-clamp-2">{post.caption}</p>
                      <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                        <span>❤️ {post.likes}</span>
                        <span>💬 {post.comments}</span>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded-full">📸 Foto</span>
                    </div>
                  </div>
                )
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a
                href="https://www.instagram.com/boucheepostreria?igsh=MTFuaThjYmVwMWtmdg==" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 bg-white hover:bg-gray-50 transition-colors"
              >
                📱 Seguirnos en Instagram
              </a>
            </div>
    
            <script async src="//www.instagram.com/embed.js" />
          </Section>
        );
    }

export default Gallery;
