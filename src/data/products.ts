export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  details: string;
}

export const products: Product[] = [
  {
    id: "champagne",
    name: "Champagne",
    image: "https://plus.unsplash.com/premium_photo-1674048382856-aa9984d8b391?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A sophisticated light oak with subtle golden undertones, perfect for bright, airy architectural spaces.",
    details: "Our Champagne collection features premium European engineered oak with a refined chevron pattern. The light, natural finish enhances the wood's organic texture while providing a durable, long-lasting surface for high-traffic areas."
  },
  {
    id: "cotton-white",
    name: "Cotton White",
    image: "https://plus.unsplash.com/premium_photo-1675782999354-2f2711e437a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A clean, minimalist white-washed oak that brings a sense of calm and purity to any interior.",
    details: "Cotton White is designed for the modern minimalist. This herringbone pattern is crafted from the finest timber, treated with a specialized coating that preserves its pristine appearance while offering exceptional resistance to wear and tear."
  },
  {
    id: "smoked-oak",
    name: "Smoked Oak",
    image: "https://images.unsplash.com/photo-1599799394212-71860043b6d6?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Deep, rich tones with a smoky finish, ideal for creating a bold, dramatic statement.",
    details: "The Smoked Oak collection offers a deep, multi-tonal finish achieved through a traditional smoking process. This enhances the natural tannins in the wood, resulting in a rich, dark aesthetic that adds depth and character to any room."
  },
  {
    id: "natural-oak",
    name: "Natural Oak",
    image: "https://plus.unsplash.com/premium_photo-1675264751027-a079c32344ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The timeless beauty of raw oak, celebrating the natural grain and warmth of the timber.",
    details: "Our Natural Oak range is the epitome of timeless elegance. Each plank is carefully selected to showcase the unique grain patterns and warm hues of authentic European oak, finished with a matte protective layer."
  },
  {
    id: "arctic-white",
    name: "Arctic White",
    image: "https://images.unsplash.com/photo-1761053133165-0f3acdaf1770?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A brilliant, cool white finish that maximizes light and creates a sense of infinite space.",
    details: "Arctic White is our most luminous collection. The cool, crisp tones are perfect for contemporary galleries and minimalist residences, providing a neutral yet striking foundation for any design palette."
  },
  {
    id: "midnight-grey",
    name: "Midnight Grey",
    image: "https://plus.unsplash.com/premium_photo-1674939763540-1b3807c424aa?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A sophisticated, dark grey with cool undertones, offering a modern alternative to traditional dark woods.",
    details: "Midnight Grey combines the warmth of timber with the sleekness of modern industrial design. The deep grey finish is achieved through a multi-stage staining process that ensures color consistency and depth."
  }
];
