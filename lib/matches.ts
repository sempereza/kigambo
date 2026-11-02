export type Match = {
  id: string
  name: string
  age: number
  location: string
  image: string
  preview: string
  time: string
  online: boolean
}

export const matches: Match[] = [
  {
    id: "1",
    name: "Kembabazi",
    age: 22,
    location: "Mbarara",
    image: "/kembabazi.jpg",
    preview: "You: That sounds like a perfect weekend ☀️",
    time: "now",
    online: true,
  },
  {
    id: "2",
    name: "Brenda",
    age: 25,
    location: "Entebbe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0BP8NdFn_GZWdZeUrTgM7tbbQr0N80GdnXth8Q9Naw&s=10",
    preview: "You: We should check it out sometime",
    time: "2h",
    online: false,
  },
  {
    id: "3",
    name: "Aisha",
    age: 24,
    location: "Kampala",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=240&auto=format&fit=crop",
    preview: "New match! Say hello",
    time: "1d",
    online: false,
  },
]