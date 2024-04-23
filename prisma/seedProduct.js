const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

async function seedProducts() {
  try {

    await prisma.products.create({
      data: {
        title: "Urban Explorer Backpack",
        description: "Introducing our latest addition to your accessory collection - the Urban Explorer Backpack. Crafted from durable, water-resistant materials, this versatile bag is designed to accompany you on all your adventures. With multiple compartments and pockets, it offers ample space to organize your essentials, whether you're navigating city streets or trekking through the wilderness. The padded shoulder straps and back panel provide comfort during extended wear, while the sleek design adds a touch of urban sophistication to your ensemble. Elevate your style and functionality with the Urban Explorer Backpack.",
        url: "https://picsum.photos/id/7",
        price: 12349
      },
    });

    await prisma.products.create({
      data: {
        title: "Books",
        description: "Welcome to a world of literary wonder! Dive into our extensive collection of captivating books that span genres and topics, catering to every reader's taste and curiosity. From gripping thrillers that will keep you on the edge of your seat to heartwarming tales that tug at your heartstrings, our library has something for everyone. Explore the depths of imagination with fantasy epics, embark on thrilling adventures in faraway lands with action-packed novels, or delve into the mysteries of the universe with thought-provoking non-fiction works. With each turn of the page, you'll discover new worlds, meet unforgettable characters, and embark on unforgettable journeys. Whether you're seeking entertainment, knowledge, or inspiration, our curated selection of books promises to ignite your imagination and expand your horizons. Get ready to lose yourself in the magic of storytelling and embark on a literary adventure unlike any other!",
        url: "https://picsum.photos/id/20",
        price: 6059
      },
    });

    await prisma.products.create({
      data: {
        title: "White Shoes",
        description: "Step into style with our latest collection of white shoes! Crisp, clean, and effortlessly chic, these versatile footwear essentials are the perfect addition to any wardrobe. Crafted from high-quality materials, our white shoes combine comfort with contemporary design, ensuring you look and feel your best with every step. Whether you're strolling through city streets, lounging by the beach, or hitting the dance floor, our white shoes are your go-to option for effortless style. From classic sneakers to elegant sandals and trendy loafers, we offer a wide range of styles to suit every occasion and personal taste. Elevate your look and make a statement with our timeless white shoes – the ultimate wardrobe staple for the modern individual.",
        url: "https://picsum.photos/id/21",
        price: 20500
      },
    });

    await prisma.products.create({
      data: {
        title: "Old Book",
        description: "Welcome to a world of literary wonder! Dive into our extensive collection of captivating books that span genres and topics, catering to every reader's taste and curiosity. From gripping thrillers that will keep you on the edge of your seat to heartwarming tales that tug at your heartstrings, our library has something for everyone. Explore the depths of imagination with fantasy epics, embark on thrilling adventures in faraway lands with action-packed novels, or delve into the mysteries of the universe with thought-provoking non-fiction works. With each turn of the page, you'll discover new worlds, meet unforgettable characters, and embark on unforgettable journeys. Whether you're seeking entertainment, knowledge, or inspiration, our curated selection of books promises to ignite your imagination and expand your horizons. Get ready to lose yourself in the magic of storytelling and embark on a literary adventure unlike any other!",
        url: "https://picsum.photos/id/24",
        price: 6999
      },
    });

    await prisma.products.create({
      data: {
        title: "Shyamanta Baruah",
        description: "Introducing our latest addition to your morning routine – the Sunrise Serenity Mug! Start your day with a sip of tranquility as you wrap your hands around this sleek, ceramic vessel. Adorned with a vibrant burst of colors reminiscent of a sunrise sky, each sip becomes a moment of peaceful reflection. The generous size ensures you have ample space for your favorite brew, whether it's a steaming cup of coffee to kickstart your day or a soothing herbal tea to unwind in the evening. With its sturdy handle and durable construction, the Sunrise Serenity Mug is not just a vessel for your beverages, but a daily reminder to embrace the beauty and serenity of each new day. So, pour yourself a cup of comfort and let the Sunrise Serenity Mug become your companion on your journey to inner peace and contentment.",
        url: "https://picsum.photos/id/30",
        price: 1399
      },
    });

    await prisma.products.create({
      data: {
        title: "Clean the world",
        description: "Introducing Clean the World, a transformative service dedicated to making a global impact through hygiene and sustainability. Our mission is simple yet profound: to collect discarded soap and hygiene products from hotels and resorts worldwide, reprocess them in our state-of-the-art facilities, and distribute them to communities in need. By recycling and repurposing these essentials, we not only prevent waste but also empower individuals and promote health and well-being. Join us in our mission to Clean the World, where every bar of soap and every bottle of shampoo has the power to change lives and make a difference. Together, we can create a brighter, more sustainable future for generations to come.",
        url: "https://picsum.photos/id/34",
        price: 123456789
      },
    });

    await prisma.products.create({
      data: {
        title: "Camera Parts",
        description: "For sale: Assorted camera parts to level up your photography game! From lenses to batteries, we've got you covered. Whether you're a pro or just starting out, find the perfect gear to suit your needs. Dive in and upgrade your kit today! Elevate your photography setup with our diverse range of camera parts, meticulously curated to cater to photographers of all levels. Dive into our collection and discover everything you need to capture stunning images and unleash your creativity.",
        url: "https://picsum.photos/id/36",
        price: 204590
      },
    });

    await prisma.products.create({
      data: {
        title: "Record Player",
        description: "Step into the timeless realm of analog audio with our classic record player. Designed to bring the warm, rich sound of vinyl into your home, this sleek and stylish turntable combines vintage aesthetics with modern technology. Featuring a belt-driven mechanism and precision-engineered tonearm, our record player ensures smooth playback and accurate tracking, allowing you to experience your favorite albums exactly as the artist intended.",
        url: "https://picsum.photos/id/39",
        price: 235999
      },
    });

    await prisma.products.create({
      data: {
        title: "Coffee Table",
        description: "Introducing our coffee table, the perfect centerpiece for your living space where style meets functionality. Crafted with meticulous attention to detail, this elegant piece of furniture adds a touch of sophistication to any room. Designed for both form and function, our coffee table features a sleek, minimalist design that complements any decor style. The spacious tabletop provides ample room for your morning coffee, favorite books, and decorative accents, while the lower shelf offers additional storage space for magazines, remote controls, or other essentials.",
        url: "https://picsum.photos/id/42",
        price: 80599
      },
    });

    await prisma.products.create({
      data: {
        title: "MacBook Pro",
        description: "Get your hands on the sleek and powerful MacBook Pro, the ultimate companion for all your computing needs! Boasting a stunning Retina display and lightning-fast processing power, this laptop is perfect for professionals, students, and creatives alike. With its sleek design and cutting-edge features, the MacBook Pro redefines what it means to work and play on a laptop. Whether you're editing videos, designing graphics, or simply browsing the web, this powerhouse device has you covered. Don't miss out on the opportunity to own the MacBook Pro and elevate your computing experience to new heights. Buy now and join the millions who rely on Apple's iconic technology!",
        url: "https://picsum.photos/id/48",
        price: 325000
      },
    });

    await prisma.products.create({
      data: {
        title: "Wood",
        description: "Discover the timeless beauty and natural charm of wood! Crafted by nature itself, wood is a versatile and durable material that adds warmth and character to any space. Whether you're building furniture, decking out your home, or embarking on a DIY project, wood offers endless possibilities. From the rich grains of oak to the rustic appeal of pine, each type of wood brings its own unique personality to your creations. With its inherent strength and resilience, wood stands the test of time, promising years of use and enjoyment. Whether you're a seasoned carpenter or a novice hobbyist, working with wood is a rewarding experience that allows you to unleash your creativity and bring your ideas to life. Embrace the natural beauty of wood today and let your imagination run wild!",
        url: "https://picsum.photos/id/52",
        price: 999999
      },
    });

    await prisma.products.create({
      data: {
        title: "Accessories",
        description: "Enhance your computing experience with a selection of essential accessories! From ergonomic keyboards to stylish mouse pads, these peripherals are designed to optimize your workflow and add a touch of flair to your setup. Keep your workspace organized with cable management solutions and desk organizers, ensuring a clutter-free environment for maximum productivity. Protect your devices with durable laptop sleeves and screen protectors, safeguarding them against scratches and spills. Stay connected on the go with portable chargers and wireless headphones, providing convenience and versatility wherever you go. Whether you're a professional working from home or a student hitting the books, these accessories are must-have companions for your computer setup. Elevate your tech game today and make the most out of your digital lifestyle!",
        url: "https://picsum.photos/id/60",
        price: 96999
      },
    });

    await prisma.products.create({
      data: {
        title: "Castle",
        description: "Step into a world of enchantment and majesty with the awe-inspiring castle. Rising proudly against the sky, its towering turrets and sturdy walls tell tales of a bygone era. From the moment you cross the drawbridge, you're transported to a realm of chivalry and romance, where knights once roamed and royalty ruled. Explore the labyrinthine corridors and grand halls adorned with tapestries and suits of armor, each echoing with the whispers of history. Wander through sprawling courtyards and manicured gardens, where fragrant blooms dance in the breeze and secret passages beckon the adventurous. Whether you're captivated by its medieval charm or mesmerized by its architectural splendor, the castle is a symbol of strength, beauty, and the enduring spirit of adventure. Come, immerse yourself in the magic of the castle, where every stone has a story to tell and every corner holds a mystery waiting to be uncovered.",
        url: "https://picsum.photos/id/61",
        price: 125000000
      },
    });

    await prisma.products.create({
      data: {
        title: "Bike",
        description: "Embark on thrilling adventures with the perfect companion: the bike. With its sleek frame and sturdy wheels, the bike is more than just a mode of transportation – it's a gateway to freedom and exploration. Feel the wind in your hair as you pedal along scenic trails or bustling city streets, enjoying the exhilarating sense of speed and independence. Whether you're commuting to work, tackling challenging mountain trails, or simply cruising around town, the bike offers versatility and excitement for riders of all ages and skill levels. With its ergonomic design and precision engineering, the bike ensures a comfortable and efficient ride, allowing you to journey further and faster than ever before. So hop on, pedal away, and let the bike take you on unforgettable adventures wherever the road may lead.",
        url: "https://picsum.photos/id/76",
        price: 20599
      },
    });

    await prisma.products.create({
      data: {
        title: "PlayStation Controller",
        description: 
        "Get ready to elevate your gaming experience with the PlayStation controller – the ultimate tool for immersive gameplay and precision control. Designed with ergonomics in mind, this sleek and comfortable controller fits perfectly in your hands, ensuring hours of comfortable gaming sessions. With its intuitive layout of buttons and responsive analog sticks, the PlayStation controller offers unparalleled accuracy and responsiveness, allowing you to execute every move with precision and finesse. Immerse yourself in your favorite games with the built-in motion sensors and touchpad, adding an extra layer of immersion and interactivity to your gameplay. Whether you're navigating treacherous landscapes, engaging in epic battles, or solving intricate puzzles, the PlayStation controller puts you in complete command of your gaming destiny. So grab hold of the controller, dive into the action, and experience gaming like never before.",
        url: "https://picsum.photos/id/76",
        price: 4999
      },
    });

    await prisma.products.create({
      data: {
        title: "Wheelbarrow",
        description: "Step back in time with the charm and nostalgia of an old wheelbarrow. Weathered by years of use, its rustic wooden frame and metal wheel tell stories of hard work and perseverance. With its worn handles and chipped paint, this vintage wheelbarrow exudes character and history, serving as a reminder of simpler times. Imagine the hands that have gripped its handles, the loads it has carried, and the miles it has traveled across fields and gardens. Despite its age, the old wheelbarrow retains its functionality, ready to assist with gardening tasks, hauling firewood, or adding a touch of rustic decor to your home or garden. Whether displayed as a piece of history or put back into service for practical use, the old wheelbarrow is a timeless symbol of resilience and craftsmanship, bridging the gap between past and present.",
        url: "https://picsum.photos/id/99",
        price: 104596
      },
    });

    await prisma.products.create({
      data: {
        title: "Old Shoes",
        description: "Step into the past with a pair of old shoes, each scuff and worn sole telling a story of adventures and journeys taken. These vintage treasures, with their weathered leather or faded canvas, bear witness to the passage of time and the memories of their previous owners. Imagine the places these shoes have been, the streets they've walked, and the paths they've traversed. Despite their worn appearance, they retain a sense of character and charm that only comes with age. Whether you're drawn to their nostalgic appeal or intrigued by their unique style, old shoes offer a glimpse into the past and a connection to bygone eras. Display them as decorative pieces, repurpose them for creative projects, or even wear them proudly, embracing their history and adding your own chapter to their story.",
        url: "https://picsum.photos/id/103",
        price: 104959
      },
    });

    await prisma.products.create({
      data: {
        title: "Dreamcatcher",
        description: "Capture the essence of tranquility and protection with a dream catcher, a timeless symbol of hope and positivity. Crafted with intricate weaving and adorned with feathers and beads, each dream catcher is a work of art, handcrafted with care and intention. Traditionally believed to filter out negative energy and bad dreams, while allowing positive dreams to pass through and gently descend upon the sleeper, these mystical talismans bring comfort and peace to any space. Hang them above your bed to invite restful sleep and sweet dreams, or display them in your home as a reminder of the power of mindfulness and positivity. Whether you're drawn to their beauty, their cultural significance, or their spiritual symbolism, dream catchers offer a sense of serenity and protection, making them cherished additions to any decor.",
        url: "https://picsum.photos/id/104",
        price: 99999
      },
    });

    await prisma.products.create({
      data: {
        title: "Diffuser",
        description: "Transform your space into a sanctuary of tranquility with a diffuser, the ultimate tool for creating a serene and aromatic atmosphere. Elegant in design and simple to use, a diffuser gently releases your favorite essential oils into the air, filling your home with soothing scents and calming fragrances. With its whisper-quiet operation and adjustable settings, you can customize the intensity and duration of the diffusion to suit your mood and preferences. Whether you're seeking relaxation, focus, or rejuvenation, a diffuser offers a natural and effective way to enhance your well-being. Simply add a few drops of your chosen essential oil, sit back, and let the gentle mist envelop you in a cloud of tranquility. From promoting better sleep to alleviating stress, a diffuser is the perfect companion for creating a peaceful and inviting atmosphere in any room of your home.",
        url: "https://picsum.photos/id/113",
        price: 8999
      },
    });

    await prisma.products.create({
      data: {
        title: "Old Bench",
        description: "Transport yourself to a bygone era with the rustic charm of an old bench. Weathered by time and seasoned with character, this vintage piece of furniture bears the marks of years spent basking in the sun and weathering the elements. Its wooden slats, worn smooth by countless sittings, tell stories of shared moments and quiet contemplation. Imagine the laughter and conversation that once filled the air as people gathered around this sturdy seat. Despite its age, the old bench retains its functionality and allure, offering a place of respite and reflection in any outdoor space. Whether nestled in a garden, adorning a quaint courtyard, or gracing a shaded veranda, this timeless piece adds a touch of nostalgia and elegance to its surroundings. Sit awhile, breathe in the scent of history, and let the old bench transport you to a simpler time.",
        url: "https://picsum.photos/id/129",
        price: 256595
      },
    });

    await prisma.products.create({
      data: {
        title: "Guitar",
        description: "Unleash your inner musician with the timeless allure of the guitar. Crafted with precision and passion, this iconic instrument embodies the soulful spirit of music. From its smooth curves to its resonant soundboard, every detail of the guitar is a testament to the craftsmanship and artistry of its makers. Whether acoustic or electric, each guitar has its own unique personality and voice, capable of expressing a wide range of emotions and melodies. Whether you're strumming chords by a campfire, shredding solos on stage, or serenading a loved one, the guitar is the perfect companion for every musical journey. With its versatile tones and endless possibilities, it inspires creativity and connection, bringing people together through the universal language of music. So pick up your guitar, tune the strings, and let your fingers dance across the fretboard as you embark on a musical adventure like no other.",
        url: "https://picsum.photos/id/145",
        price: 12595
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();