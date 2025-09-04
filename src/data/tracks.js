export const tracks = [
  { id: '1', title: 'Skyline Dreams', artist: 'Nova Waves', album: 'City Nights', duration: '3:24', cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&q=80&auto=format&fit=crop' },
  { id: '2', title: 'Midnight Run', artist: 'Echo Drive', album: 'Neon Roads', duration: '4:02', cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80&auto=format&fit=crop' },
  { id: '3', title: 'Golden Hour', artist: 'Aurora Lane', album: 'Sunset Stories', duration: '2:58', cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80&auto=format&fit=crop' },
  { id: '4', title: 'Ocean Breeze', artist: 'Blue Harbor', album: 'Coastline', duration: '3:48', cover: 'https://images.unsplash.com/photo-1524678606370-e6b4b36a4f45?w=300&q=80&auto=format&fit=crop' },
  { id: '5', title: 'Stardust', artist: 'Luna Park', album: 'Cosmic Tales', duration: '3:11', cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80&auto=format&fit=crop' },
  { id: '6', title: 'Waves', artist: 'Pacific Pulse', album: 'Tide', duration: '2:44', cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&q=80&auto=format&fit=crop' }
]

export const trending = tracks.slice(0, 3)
export const forYou = tracks.slice(3, 6)
