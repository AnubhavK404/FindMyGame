import { MoodId } from './moodMap';

export interface GameRecommendation {
  title: string;
  description: string;
  why: string;
  genre: string;
}

const GAME_LIBRARY: Record<MoodId, GameRecommendation[]> = {
  happy: [
    { title: "Super Mario Odyssey", description: "A joyful adventure through vibrant worlds.", why: "Pure creativity and bright colors amplify your joy.", genre: "3D Platformer" },
    { title: "Katamari Damacy Reroll", description: "Roll up everything into a giant ball of chaos.", why: "Quirky humor and upbeat music keep you smiling.", genre: "Puzzle-Action" },
    { title: "Fall Guys", description: "Wacky physics-based obstacle courses.", why: "Lighthearted, silly, and perfect for laughter.", genre: "Party Royale" },
    { title: "Slime Rancher", description: "Collect and raise adorable, bouncy slimes.", why: "The sheer cuteness and bright world are infectious.", genre: "First-person Adventure" },
    { title: "Kirby and the Forgotten Land", description: "An adorable journey with the pink puffball.", why: "Innocent fun and satisfying gameplay for high spirits.", genre: "3D Platformer" },
    { title: "Untitled Goose Game", description: "Be a horrible goose and ruin everyone's day.", why: "Mischievous fun that brings out a playful side.", genre: "Stealth-Puzzle" },
    { title: "LocoRoco Remastered", description: "Roll and bounce singing blobs through colorful worlds.", why: "The catchy music and vibrant art are pure happiness.", genre: "Action-Puzzle" },
    { title: "Ratchet & Clank: Rift Apart", description: "A cinematic, interdimensional adventure.", why: "High-energy fun with spectacular visuals.", genre: "Action-Platformer" },
    { title: "Sackboy: A Big Adventure", description: "A charming, creative cooperative platformer.", why: "Whimsical levels and a fantastic, upbeat soundtrack.", genre: "Platformer" },
    { title: "A Short Hike", description: "A peaceful, bite-sized adventure up a mountain.", why: "Gentle exploration that feels like a warm hug.", genre: "Adventure" }
  ],
  sad: [
    { title: "Gris", description: "A beautiful journey through a world of color and grief.", why: "Provides a stunning space to process sadness through art.", genre: "Artistic Platformer" },
    { title: "Spiritfarer", description: "A cozy management game about dying and saying goodbye.", why: "A gentle, cathartic way to explore feelings of loss.", genre: "Cozy Management" },
    { title: "To the Moon", description: "A narrative story about fulfilling a dying man's wish.", why: "Sometimes a good cry is exactly what you need.", genre: "Narrative Adventure" },
    { title: "What Remains of Edith Finch", description: "Explore the tragic history of your ancestors.", why: "A masterpiece of melancholy storytelling and atmosphere.", genre: "Walking Simulator" },
    { title: "Journey", description: "An anonymous pilgrimage across a vast desert.", why: "Beautifully explores themes of life, death, and connection.", genre: "Adventure" },
    { title: "That Dragon, Cancer", description: "A poetic, autobiographical experience of love and loss.", why: "A raw, powerful exploration of grief and hope.", genre: "Narrative" },
    { title: "Night in the Woods", description: "A college dropout returns to her decaying hometown.", why: "Captures the bittersweet feeling of growing up and moving on.", genre: "Adventure" },
    { title: "Before Your Eyes", description: "Control the story by blinking in real life.", why: "An innovative, heart-wrenching look at a life passing by.", genre: "Interactive Narrative" },
    { title: "Brothers: A Tale of Two Sons", description: "Two brothers embark on a journey for a cure.", why: "A powerful story about family and the pain of loss.", genre: "Adventure" },
    { title: "Life is Strange", description: "A time-traveling adventure about friendship and choice.", why: "Deeply emotional with a beautifully melancholic vibe.", genre: "Narrative Adventure" }
  ],
  angry: [
    { title: "DOOM Eternal", description: "Fast-paced, high-intensity demon-slaying action.", why: "Channel energy into a powerful, rhythmic flow state.", genre: "FPS" },
    { title: "God of War (2018)", description: "A brutal and emotional journey of father and son.", why: "Mirrors your own struggle with rage and power.", genre: "Action-Adventure" },
    { title: "Metal: Hellsinger", description: "Slay demons to the beat of heavy metal music.", why: "Vent frustration by matching your pulse to the beat.", genre: "Rhythm FPS" },
    { title: "Hotline Miami", description: "Ultra-violent, high-speed top-down action.", why: "Pure adrenaline and fast-paced, stylish aggression.", genre: "Top-down Shooter" },
    { title: "Hades", description: "Fight your way out of the underworld repeatedly.", why: "The fast combat and constant progression are satisfying.", genre: "Rogue-like Action" },
    { title: "Mortal Kombat 11", description: "Brutal fighting with over-the-top fatalities.", why: "A visceral and direct outlet for competitive energy.", genre: "Fighting" },
    { title: "Ghostrunner", description: "Cyberpunk ninja action where one hit kills.", why: "Requires absolute focus and high-speed execution.", genre: "Action" },
    { title: "Wolfenstein II", description: "Over-the-top, satisfying combat against oppressors.", why: "Powerful narrative and crunchy, impactful gunplay.", genre: "FPS" },
    { title: "Sifu", description: "Master Kung Fu and avenge your family.", why: "The brutal, demanding combat rewards discipline and focus.", genre: "Action/Brawler" },
    { title: "For Honor", description: "Tactical, heavy-hitting medieval combat.", why: "Weighty strikes and high-stakes duels vent intensity.", genre: "Action/Fighting" }
  ],
  calm: [
    { title: "Abzû", description: "A beautiful underwater exploration game.", why: "Fluid movement and serene life are incredibly meditative.", genre: "Exploration" },
    { title: "Unpacking", description: "Organize possessions in a new home.", why: "Tactile sounds and simple tasks provide order and peace.", genre: "Zen Puzzle" },
    { title: "Dorfromantik", description: "A peaceful building strategy and puzzle game.", why: "No timers—just building a beautiful, growing landscape.", genre: "Strategy/Puzzle" },
    { title: "Stardew Valley", description: "Build a farm and find peace in a small town.", why: "The gentle routine and music are incredibly soothing.", genre: "Farming Sim" },
    { title: "Townscaper", description: "Build colorful little towns with no goals or pressure.", why: "The ultimate toy for creative, stress-free relaxation.", genre: "City Builder" },
    { title: "Flower", description: "Control the wind and guide petals through landscapes.", why: "A pure sensory experience of beauty and tranquility.", genre: "Artistic" },
    { title: "PowerWash Simulator", description: "Satisfyingly clean everything with high pressure.", why: "The repetitive, focused task is surprisingly meditative.", genre: "Simulation" },
    { title: "Coffee Talk", description: "Listen to people's problems and serve them coffee.", why: "Cozy atmosphere and low-stakes narrative interaction.", genre: "Visual Novel" },
    { title: "Amano's Puzzle", description: "Beautiful, hand-painted puzzles with soft music.", why: "A quiet, intellectual way to unwind.", genre: "Puzzle" },
    { title: "Kind Words", description: "Write and receive letters from real people.", why: "A gentle, positive space for empathy and reflection.", genre: "Casual" }
  ],
  anxious: [
    { title: "Celeste", description: "Climb a mountain and face your inner shadows.", why: "Its story and 'feather breathing' are genuinely helpful.", genre: "Precision Platformer" },
    { title: "Tetris Effect: Connected", description: "Classic Tetris transformed into a sensory journey.", why: "Proven to help reduce intrusive thoughts and anxiety.", genre: "Puzzle" },
    { title: "Super Hexagon", description: "A minimalist, high-speed rhythm game.", why: "Requires total focus, effectively silencing a racing mind.", genre: "Action/Rhythm" },
    { title: "Mini Metro", description: "Design a subway map for a growing city.", why: "Engaging and orderly, helping to focus mental energy.", genre: "Strategy" },
    { title: "Portal 2", description: "Solve physics puzzles with a teleportation gun.", why: "Engaging logic puzzles provide a satisfying distraction.", genre: "Puzzle-Platformer" },
    { title: "Everything", description: "Become anything you see in the universe.", why: "A perspective-shifting experience that eases stress.", genre: "Simulation" },
    { title: "Baba Is You", description: "Change the rules of the game by pushing blocks.", why: "Deeply absorbing logic that demands full attention.", genre: "Puzzle" },
    { title: "Eufloria", description: "A beautiful, minimalist space strategy game.", why: "Slow-paced and rhythmic, calming the senses.", genre: "Strategy" },
    { title: "Proteus", description: "Explore a procedurally generated island of music.", why: "Purely experiential and peaceful exploration.", genre: "Exploration" },
    { title: "Wilmot's Warehouse", description: "Organize a warehouse with efficiency and logic.", why: "Satisfies the need for order and clear goals.", genre: "Puzzle" }
  ],
  dreamy: [
    { title: "Sayonara Wild Hearts", description: "A pop-album game about hearts and high speeds.", why: "Neon aesthetics and flow feel like a music video.", genre: "Rhythm-Action" },
    { title: "Manifold Garden", description: "An M.C. Escher-inspired world of infinite geometry.", why: "Challenges your perception in a surreal, beautiful way.", genre: "First-person Puzzle" },
    { title: "The Artful Escape", description: "A cosmic journey about finding your stage persona.", why: "A psychedelic dreamscape that celebrates imagination.", genre: "Narrative Platformer" },
    { title: "Kentucky Route Zero", description: "A magical realist adventure about a secret highway.", why: "Atmospheric, surreal, and deeply poetic.", genre: "Point-and-Click" },
    { title: "Superliminal", description: "Puzzles based on perspective and optical illusions.", why: "A dream-like world where perception is reality.", genre: "Puzzle" },
    { title: "Journey", description: "A silent trek through vast, shimmering landscapes.", why: "Feels like a spiritual, wordless dream journey.", genre: "Adventure" },
    { title: "Etherborn", description: "A gravity-shifting puzzle game in a surreal world.", why: "Ethereal visuals and mind-bending environmental puzzles.", genre: "Puzzle-Platformer" },
    { title: "Child of Light", description: "A playable poem with beautiful watercolor art.", why: "Whimsical, dream-like atmosphere and storytelling.", genre: "RPG" },
    { title: "Gorogoa", description: "A hand-drawn puzzle game of layered perspectives.", why: "A stunning, wordless journey through imagination.", genre: "Puzzle" },
    { title: "Subnautica", description: "Explore a vibrant, alien underwater world.", why: "Atmospheric and wonder-filled exploration of the deep.", genre: "Survival" }
  ],
  confident: [
    { title: "Hades", description: "Battle out of the underworld with stylish action.", why: "Progression and boons make you feel truly unstoppable.", genre: "Rogue-like Action" },
    { title: "Devil May Cry 5", description: "Stylish, high-octane combat with ranked performance.", why: "Achieving an 'SSS' rank is the ultimate digital boost.", genre: "Character Action" },
    { title: "Elden Ring", description: "Overcome impossible challenges in a vast world.", why: "Conquering bosses rewards you with true accomplishment.", genre: "Action RPG" },
    { title: "Sekiro: Shadows Die Twice", description: "Master the blade in a brutal shinobi adventure.", why: "The 'clink' of a perfect parry builds immense confidence.", genre: "Action" },
    { title: "Sifu", description: "Learn Kung Fu and master every encounter.", why: "Skill-based combat that rewards your dedication.", genre: "Action/Brawler" },
    { title: "Streets of Rage 4", description: "Classic beat 'em up action with a modern polish.", why: "Empowering combat and an incredible soundtrack.", genre: "Beat 'em Up" },
    { title: "Doom (2016)", description: "The original power-fantasy FPS experience.", why: "Be the 'Doom Slayer'—the most feared being in hell.", genre: "FPS" },
    { title: "Armored Core VI", description: "Build and pilot a powerful combat mech.", why: "Deep customization and high-skill combat mastery.", genre: "Action/Mecha" },
    { title: "Monster Hunter: World", description: "Track and hunt massive, powerful monsters.", why: "The loop of hunt, craft, and conquer is empowering.", genre: "Action RPG" },
    { title: "Titanfall 2", description: "Fast movement and massive pilot-mech combat.", why: "Incredible flow and a sense of total battlefield control.", genre: "FPS" }
  ],
  lonely: [
    { title: "Firewatch", description: "A mystery set in the Wyoming wilderness.", why: "Radio connection makes you feel connected in isolation.", genre: "Narrative Mystery" },
    { title: "Death Stranding", description: "A journey to reconnect a fractured society.", why: "Explores the weight and beauty of human connection.", genre: "Social Strand System" },
    { title: "Outer Wilds", description: "An open-world mystery in a solar system time loop.", why: "Campfire music makes solitude feel like an adventure.", genre: "Space Exploration" },
    { title: "Shadow of the Colossus", description: "Hunt giants in a vast, empty, beautiful world.", why: "A poetic exploration of isolation and determination.", genre: "Action-Adventure" },
    { title: "The Long Dark", description: "Survive in a cold, lonely Canadian wilderness.", why: "Atmospheric and quiet, focusing on pure survival.", genre: "Survival" },
    { title: "Ico", description: "Protect a companion in a massive, lonely castle.", why: "Themes of connection and protection in an empty world.", genre: "Action-Adventure" },
    { title: "No Man's Sky", description: "Explore an infinite universe of billions of planets.", why: "The vastness of space makes for a contemplative journey.", genre: "Exploration/Survival" },
    { title: "Subnautica", description: "Stranded alone on an ocean planet.", why: "Atmospheric isolation that turns into a deep mystery.", genre: "Survival" },
    { title: "Thomas Was Alone", description: "A game about rectangles and their friendship.", why: "Surprisingly emotional narrative about finding others.", genre: "Puzzle-Platformer" },
    { title: "Gone Home", description: "Return to an empty house and find where everyone went.", why: "Captures the quiet mystery of a home left behind.", genre: "Narrative" }
  ],
  excited: [
    { title: "Rocket League", description: "High-powered soccer with vehicular mayhem.", why: "Fast-paced competition matches your high energy.", genre: "Sports/Action" },
    { title: "Hi-Fi RUSH", description: "Action game where everything moves to the beat.", why: "Vibrant animation and rhythmic combat are infectious.", genre: "Rhythm-Action" },
    { title: "Ultrakill", description: "A fast-paced, old-school ultra-violent FPS.", why: "Demands absolute focus and rewards high-speed style.", genre: "Retro FPS" },
    { title: "Neon White", description: "Speedrun-based FPS card game in heaven.", why: "Incredible sense of speed and rhythmic flow.", genre: "Action/Speedrun" },
    { title: "Forza Horizon 5", description: "Open-world racing festival in vibrant Mexico.", why: "High speeds, great music, and pure driving fun.", genre: "Racing" },
    { title: "Sonic Frontiers", description: "High-speed open-zone platforming.", why: "The fastest Sonic has ever felt, with great energy.", genre: "Action-Platformer" },
    { title: "Splatoon 3", description: "Colorful, ink-based turf battles.", why: "Fast, messy, and incredibly energetic competition.", genre: "Third-person Shooter" },
    { title: "Sunset Overdrive", description: "Fast movement and wacky weapons in a stylized city.", why: "Constant motion and over-the-top, vibrant action.", genre: "Action-Adventure" },
    { title: "F-Zero GX", description: "The fastest racing game ever made.", why: "Requires lightning-fast reflexes and high energy.", genre: "Racing" },
    { title: "Geometry Dash", description: "Rhythm-based action platformer.", why: "High stakes and high energy with a great soundtrack.", genre: "Rhythm/Action" }
  ],
  curious: [
    { title: "The Witness", description: "An island of puzzles that teach you how to think.", why: "Every discovery feels like a personal breakthrough.", genre: "Puzzle" },
    { title: "Return of the Obra Dinn", description: "Deduction mystery on a 1800s ghost ship.", why: "Unique logic mechanics satisfy your inner detective.", genre: "Deduction Mystery" },
    { title: "Tunic", description: "A small fox in a world full of ancient secrets.", why: "Captures the feeling of discovering a game's secrets.", genre: "Action-Adventure" },
    { title: "Outer Wilds", description: "Uncover the secrets of an ancient civilization.", why: "The ultimate game for pure, unguided curiosity.", genre: "Space Exploration" },
    { title: "Her Story", description: "Search a police database to uncover a story.", why: "Makes you feel like a real investigator following leads.", genre: "Full Motion Video" },
    { title: "Obduction", description: "A sci-fi adventure from the creators of Myst.", why: "Strange worlds and deep environmental mysteries.", genre: "Adventure/Puzzle" },
    { title: "Inscryption", description: "A dark, deck-building rogue-like with many secrets.", why: "Constantly subverts expectations and invites discovery.", genre: "Card/Puzzle" },
    { title: "The Talos Principle", description: "Philosophical first-person puzzle game.", why: "Engaging puzzles and a deep, mystery-filled story.", genre: "Puzzle" },
    { title: "Disco Elysium", description: "A complex RPG about a detective and a city.", why: "Unparalleled depth in investigation and world-building.", genre: "RPG" },
    { title: "FEZ", description: "Explore a 2D world with 3D perspectives.", why: "Packed with layers of hidden secrets and mysteries.", genre: "Puzzle-Platformer" }
  ]
};

export async function getGameRecommendation(selectedMoods: MoodId[]): Promise<GameRecommendation> {
  if (selectedMoods.length === 0) {
    return { title: "Minecraft", description: "The ultimate sandbox for any mood.", why: "Because you haven't decided yet, and you can do anything here.", genre: "Sandbox" };
  }

  // Get used games from local storage to prevent repeats
  let usedGames: string[] = [];
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('moodmixer_used_games');
    usedGames = stored ? JSON.parse(stored) : [];
  }

  // Pool all potential games from selected moods
  let pool: GameRecommendation[] = [];
  selectedMoods.forEach(mood => {
    pool = [...pool, ...GAME_LIBRARY[mood]];
  });

  // Filter out used games if possible
  let filteredPool = pool.filter(game => !usedGames.includes(game.title));
  
  // If we've seen everything in the pool, reset for this session/mood set
  if (filteredPool.length === 0) {
    filteredPool = pool;
  }

  // Pick a random game from the filtered pool
  const recommendation = filteredPool[Math.floor(Math.random() * filteredPool.length)];

  // Update used games in local storage
  if (typeof window !== 'undefined') {
    usedGames.push(recommendation.title);
    // Keep only last 50 games to prevent storage bloat
    if (usedGames.length > 50) usedGames.shift();
    localStorage.setItem('moodmixer_used_games', JSON.stringify(usedGames));
  }

  return recommendation;
}
