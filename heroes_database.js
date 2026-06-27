/**
 * BASE DE DONNÉES HÉROS — Puzzles & Chaos: Frozen Castle
 * Mise à jour : juin 2026
 * Sources : screenshots joueur + tier lists communautaires (ldshop.gg, allclash.com, packsify.com)
 *
 * LÉGENDE FIABILITÉ :
 * "confirmed"  = données issues des screenshots de la joueuse (100% fiable)
 * "meta"       = données issues des tier lists et guides communautaires (fiable)
 * "estimated"  = estimation basée sur les descriptions générales du jeu (à confirmer)
 */

const HEROES_DB = {

  // ═══════════════════════════════════════════════
  // HÉROS POSSÉDÉS PAR LA JOUEUSE
  // ═══════════════════════════════════════════════

  aerposia: {
    name: "Aerposia",
    element: "Dark",
    season: "S2",
    owned: true,
    current: { stars: 5, talent: 4, power: 2406540 },
    ratings: { pvp: "S", pve: "A", boss: "C" },
    rageRegen: "Moyenne",
    troopType: "Cavalerie / Infanterie",
    source: "confirmed",
    skills: [
      { name: "Garrot Sombre", type: "Active", desc: "Pose une Marque Mortelle → Spectre après 2 tours : 1 088% de dégâts.", key: true },
      { name: "Neutralisation", type: "Améliorée", desc: "Réduit la DEF de la cible de 44% pendant 5 tours." },
      { name: "Barrière Spirituelle", type: "Passif", desc: "Immunité totale aux réductions de Rage. Indissipable." },
      { name: "Moisson Spirituelle", type: "Améliorée", desc: "Récupère 40% de Rage à chaque kill." },
      { name: "Faiblesse de Cible", type: "Locked", unlock: "6★", desc: "+30% Briser. Chance d'ignorer la Parade." }
    ],
    troopSkills: [
      { name: "Compétence", level: 4, value: "+300% ATQ troupe" },
      { name: "ATQ Cavalerie", level: 4, value: "+90%" },
      { name: "ATQ Infanterie", level: 4, value: "+90%" },
      { name: "DEF Troupe", level: 4, value: "+90%" }
    ],
    weapon: {
      name: "Faux du Dévoreur d'Âmes", stars: 5, level: 13,
      legion: { atq: "+17.5%", def: "+17.5%", pv: "+17.5%" },
      hero: { atq: 200, def: 200, pv: 400 },
      exclusive: [
        { trigger: "+0", effect: "PV Cavalerie +80%" },
        { trigger: "+2", effect: "PV Infanterie +80%" },
        { trigger: "+4", effect: "DEF Troupe +40%" }
      ]
    },
    strengths: ["Multiplicateur 1 088% parmi les plus hauts du jeu", "Immunité Rage indissipable", "40% Rage sur kill → enchaînement", "Debuff DEF -44% sur 5 tours"],
    weaknesses: ["Délai 2 tours avant le Spectre", "6★ verrouillées (Briser non actif)", "Régénération Rage : Moyenne", "C en Boss — inadaptée au Boss Alliance"],
    synergies: {
      best: ["khaos", "violette", "tala"],
      good: ["tania", "maxim", "herukab"],
      avoid_with: ["guan_yu", "norris"] // Boss formation incompatible
    },
    formations: {
      pvp_meta: ["khaos", "violette", "aerposia"],
      pvp_current: ["aerposia", "tania", "tala"],
      boss: "NE PAS UTILISER — utiliser Guan Yu + Norris + Khaos"
    },
    priorities: [
      "Débloquer 6★ (Faiblesse de Cible +30% Briser)",
      "Acquérir Khaos en priorité absolue",
      "Acquérir Violette pour le trio Dark PvP",
      "Continuer d'améliorer la Faux au-delà de +13"
    ]
  },

  tania: {
    name: "Tania",
    element: "Glace",
    season: null,
    owned: true,
    current: { stars: "6★ Ascendée (rouge)", talent: 6, power: 3618487 },
    ratings: { pvp: "A", pve: "A", boss: "B+" },
    rageRegen: "Moyenne",
    troopType: "Cavalerie",
    source: "confirmed",
    skills: [
      { name: "Allégro de Vie", type: "Active", desc: "Restaure 44% de PV à tous les alliés.", key: true },
      { name: "Bouclier Aquatique", type: "Améliorée", desc: "Augmente la DEF de tous les alliés de 63% pendant 5 tours." },
      { name: "Moiteur", type: "Améliorée", desc: "Dissipe tous les buffs des alliés. (Utilitaire situationnel)" },
      { name: "Élégie", type: "Passif", desc: "Chance d'étourdir l'ennemi 2 tours à sa mort." },
      { name: "Volonté d'Acier", type: "Locked", unlock: "6★", desc: "+30% Résistance Critique." }
    ],
    troopSkills: [
      { name: "Compétence", level: 6, value: "+500% ATQ troupe" },
      { name: "PV Cavalerie", level: 6, value: "+128%" },
      { name: "DEF Cavalerie", level: 6, value: "+128%" },
      { name: "ATQ Cavalerie", level: 6, value: "+128%" }
    ],
    weapon: {
      name: "Harpe de l'Océan", stars: 5, level: 9,
      legion: { atq: "+12%", def: "+12%", pv: "+12%" },
      hero: { atq: 200, def: 200, pv: 400 },
      exclusive: [
        { trigger: "+0", effect: "DEF Troupe +40%" },
        { trigger: "+2", effect: "PV Troupe +40%" },
        { trigger: "+4", effect: "ATQ Troupe +40%" }
      ]
    },
    strengths: ["Meilleure soigneuse du jeu (44% AoE)", "Triple bonus cavalerie +128%", "Compétence active +500%", "Buff DEF équipe +63% / 5 tours", "Contrôle post-mortem (Élégie)"],
    weaknesses: ["Aucun dégât offensif", "Moiteur dangereux si mal utilisé", "Harpe à +9 — moins efficace qu'Aerposia (+13)"],
    synergies: {
      best: ["aerposia", "khaos", "guan_yu"],
      good: ["violette", "dimina", "boyd"],
      avoid_with: []
    },
    formations: {
      pvp_cavalry: ["aerposia", "tania", "tala"],
      boss_support: ["guan_yu", "norris", "tania"],
      universal: ["aerposia", "tania", "khaos"]
    },
    priorities: [
      "Améliorer la Harpe au-delà de +9 (objectif +13)",
      "Duo Tania + Aerposia en cavalerie",
      "Acquérir Khaos pour le trio universel",
      "Construire formation Boss séparée avec Guan Yu"
    ]
  },

  dimina: {
    name: "Dimina",
    element: "Nature",
    season: "S2",
    owned: true,
    current: { stars: 5, talent: 2, power: 2081040 },
    ratings: { pvp: "A", pve: "A", boss: "A" },
    rageRegen: "Moyenne",
    troopType: "Cavalerie / Archer",
    source: "confirmed",
    skills: [
      { name: "Croissance Infinie", type: "Active", desc: "Élimine 2 rangs → 210% dégâts par pièce (Rage ennemie bloquée) + 300% dégâts de zone.", key: true },
      { name: "Couvent de Nature", type: "Améliorée", desc: "Les pièces éliminées n'augmentent pas la Rage ennemie." },
      { name: "Pouvoir de la Nature", type: "Passif", desc: "Transforme 2 pièces aléatoires en bombes au début du combat." },
      { name: "Protection Terrestre", type: "Améliorée", desc: "Potion temporaire 3 tours → restaure 20% des dégâts subis après." },
      { name: "Faiblesse de Cible", type: "Locked", unlock: "6★", desc: "+30% Briser." }
    ],
    troopSkills: [
      { name: "Compétence", level: 2, value: "+150% ATQ troupe" },
      { name: "ATQ Cavalerie", level: 2, value: "+40%" },
      { name: "ATQ Archer", level: 2, value: "+40%" },
      { name: "DEF Troupe", level: 2, value: "+40%" }
    ],
    weapon: {
      name: "Bâton d'Abondance", stars: null, level: null,
      note: "Non obtenu — aperçu maximal 8★ +30",
      legion_max: { atq: "+106%", def: "+106%", pv: "+106%" },
      exclusive_max: [
        { trigger: "+0", effect: "PV Cavalerie +200%" },
        { trigger: "+2", effect: "PV Archer +200%" },
        { trigger: "+4", effect: "DEF Troupe +100%" },
        { trigger: "+6", effect: "ATQ Cavalerie +200% + ATQ Archer +200%" }
      ]
    },
    strengths: ["A partout (PvP/PvE/Boss) — très polyvalente", "Blocage Rage ennemie unique (Couvent)", "Bombes dès tour 1", "Bouclier 20% post-combat"],
    weaknesses: ["Talent +2 seulement — compétences troupe très en dessous du potentiel", "Bâton d'Abondance non obtenu", "6★ verrouillées"],
    synergies: {
      best: ["guan_yu", "khaos", "tania"],
      good: ["aerposia", "boyd", "tala"],
      avoid_with: []
    },
    formations: {
      boss_nature: ["guan_yu", "dimina", "khaos"],
      pve: ["dimina", "tania", "tala"],
      pvp: ["dimina", "aerposia", "tania"]
    },
    priorities: [
      "Monter talent de +2 à +6 minimum",
      "Débloquer 6★ (Faiblesse de Cible)",
      "Obtenir le Bâton d'Abondance via événements",
      "Acquérir Guan Yu — Guan Yu 3★ > Dimina 5★ en Boss"
    ]
  },

  tutanhet: {
    name: "Tutanhet",
    element: "Feu",
    season: null,
    owned: true,
    current: { stars: 5, talent: 4, power: 1910415 },
    ratings: { pvp: "A", pve: "A", boss: "B" },
    rageRegen: "Moyenne",
    troopType: "Toutes troupes",
    tierNote: "D-Tier selon meta actuelle — à réévaluer",
    source: "confirmed",
    skills: [
      { name: "Flamboiement Ésotérique", type: "Active", desc: "240% dégâts à 3 ennemis aléatoires.", key: true },
      { name: "Regard Pétrifiant", type: "Améliorée", desc: "Chance de paralyser la cible. DEF +30% mais Rage bloquée pendant 3 tours." },
      { name: "Poison d'Élixir", type: "Améliorée", desc: "Dégâts de poison aux ennemis paralysés pendant 3 tours." },
      { name: "Corrosion de Bouclier", type: "Améliorée", desc: "Réduit la DEF des ennemis paralysés de 10%." },
      { name: "Maîtrise de Combat", type: "Locked", unlock: "6★", desc: "+30% Critique. Chance de dégâts doubles." }
    ],
    troopSkills: [
      { name: "Compétence", level: 4, value: "+300% ATQ troupe" },
      { name: "PV Troupe", level: 4, value: "+25.6%" },
      { name: "DEF Troupe", level: 4, value: "+25.6%" },
      { name: "ATQ Troupe", level: 4, value: "+25.6%" }
    ],
    weapon: {
      name: "Artefact Pyro", stars: 4, level: 2,
      legion: { atq: "+1.5%", def: "+1.5%", pv: "+1.5%" },
      hero: { atq: 120, def: 120, pv: 240 },
      exclusive: [
        { trigger: "+0", effect: "DEF Troupe +10%" },
        { trigger: "+2", effect: "PV Troupe +10%" },
        { trigger: "+4", effect: "ATQ Troupe +10%" }
      ]
    },
    strengths: ["Combo paralysie unique (Regard + Poison + Corrosion)", "AoE 3 cibles", "Blocage Rage sur cible paralysée"],
    weaknesses: ["D-Tier selon meta actuelle", "Artefact Pyro 4★ +2 — attributs légion +1.5% seulement", "6★ verrouillées", "Moins efficace que Anastasia (S Feu)"],
    synergies: {
      best: ["anastasia", "norris"],
      good: ["aerposia", "tania", "khaos"],
      counter: ["boyd"] // Boyd inflige +40% à Tutanhet
    },
    formations: {
      fire: ["anastasia", "tutanhet", "norris"],
      pvp: ["aerposia", "tutanhet", "tania"]
    },
    priorities: [
      "Monter l'Artefact Pyro en 5★ puis améliorer (+1.5% → +17.5% objectif)",
      "Débloquer 6★ (Maîtrise de Combat +30% Crit)",
      "Acquérir Anastasia — carry Feu S-Tier qui le complète",
      "Remplacer progressivement par Anastasia si disponible"
    ]
  },

  boyd: {
    name: "Boyd",
    element: "Nature",
    season: null,
    owned: true,
    current: { stars: 5, talent: 4, power: 2334090 },
    ratings: { pvp: "A", pve: "A", boss: "B+" },
    tierNote: "D-Tier méta globale — mais fort counter Feu",
    rageRegen: "Moyenne",
    troopType: "Cavalerie",
    source: "confirmed",
    skills: [
      { name: "Griffe du Vide", type: "Active", desc: "530% dégâts mono-cible. Si kill : Résistance Critique +30% / 5 tours.", key: true },
      { name: "Absorption de Force", type: "Améliorée", desc: "Transfère les buffs de la cible à des alliés aléatoires." },
      { name: "Instinct d'Auto-Guérison", type: "Passif", desc: "Restaure 5% PV/tour aux alliés Nature pendant 6 tours au début du combat." },
      { name: "Sang Froid", type: "Passif", desc: "+40% dégâts aux héros de Feu. Indissipable." },
      { name: "Faiblesse de Cible", type: "Locked", unlock: "6★", desc: "+30% Briser." }
    ],
    troopSkills: [
      { name: "Compétence", level: 4, value: "+300% ATQ troupe" },
      { name: "PV Cavalerie", level: 4, value: "+64%" },
      { name: "DEF Cavalerie", level: 4, value: "+64%" },
      { name: "ATQ Cavalerie", level: 4, value: "+64%" }
    ],
    weapon: {
      name: "Griffe d'Acier", stars: 4, level: 5,
      legion: { atq: "+3%", def: "+3%", pv: "+3%" },
      hero: { atq: 120, def: 120, pv: 240 },
      exclusive: [
        { trigger: "+0", effect: "PV Cavalerie +20%" },
        { trigger: "+2", effect: "DEF Cavalerie +20%" },
        { trigger: "+4", effect: "ATQ Cavalerie +20%" }
      ]
    },
    strengths: ["530% mono-cible — plus gros multiplicateur mono du roster", "Counter Feu natif +40% indissipable", "Vol de buff (Absorption)", "Soin passif Nature 6 tours"],
    weaknesses: ["D-Tier global meta", "Griffe d'Acier 4★ +5 — +3% légion seulement", "6★ verrouillées", "Moins fort que Guan Yu en Nature"],
    synergies: {
      best: ["guan_yu", "dimina", "tala"],
      good: ["tania", "khaos"],
      counter_by: ["tutanhet"] // Sang Froid contre Tutanhet
    },
    formations: {
      nature: ["guan_yu", "boyd", "dimina"],
      vs_fire: ["boyd", "tania", "aerposia"]
    },
    priorities: [
      "Monter la Griffe d'Acier en 5★ puis améliorer",
      "Débloquer 6★ (Faiblesse de Cible)",
      "Acquérir Guan Yu — priorité Nature absolue",
      "Déployer vs compositions Feu adverses"
    ]
  },

  herukab: {
    name: "Herukab",
    element: "Lumière",
    season: "S3",
    owned: true,
    current: { stars: "6★ Ascendée (rouge)", talent: 1, power: 1469268 },
    ratings: { pvp: "A", pve: "A+", boss: "B" },
    rageRegen: "Moyenne",
    troopType: "Toutes troupes",
    source: "confirmed",
    skills: [
      { name: "Tempête Dorée", type: "Active", desc: "264% dégâts à TOUS les ennemis.", key: true },
      { name: "Lumière Éclatante", type: "Améliorée", desc: "Réduit les coups de tous les ennemis de 34% pendant 4 tours." },
      { name: "Puissance Divine", type: "Améliorée", desc: "Réduit l'ATQ de tous les ennemis de 35% pendant 4 tours." },
      { name: "Frappe Multiple", type: "Améliorée", desc: "Attaque à nouveau tous les ennemis avec les mêmes dégâts." },
      { name: "Maîtrise de Combat", type: "Locked", unlock: "7★", desc: "+30% Critique. Chance de dégâts doubles." }
    ],
    troopSkills: [
      { name: "Compétence", level: 1, value: "+120% ATQ troupe" },
      { name: "PV Troupe (Passif)", level: 1, value: "+15%" },
      { name: "DEF Troupe (Passif)", level: 1, value: "+15%" },
      { name: "ATQ Troupe (Passif)", level: 1, value: "+15%" }
    ],
    weapon: {
      name: "Sceptre de l'Aube", stars: null, level: null,
      note: "Non obtenu — aperçu maximal 8★ +30",
      legion_max: { atq: "+106%", def: "+106%", pv: "+106%" },
      exclusive_max: [
        { trigger: "+0", effect: "DEF Troupe +100%" },
        { trigger: "+2", effect: "PV Troupe +100%" },
        { trigger: "+4", effect: "ATQ Troupe +100%" },
        { trigger: "+6", effect: "ATQ Troupe +150% supplémentaires" }
      ]
    },
    strengths: ["Double AoE total (264% × 2)", "Double debuff AoE (-34% coups + -35% ATQ)", "S3 — potentiel futur maximal", "Sceptre +106% légion + +150% ATQ exclu au max"],
    weaknesses: ["Talent +1 — compétences troupe très faibles", "Sceptre non obtenu", "7★ verrouillées (Maîtrise de Combat)"],
    synergies: {
      best: ["maxim", "patty", "aerposia"],
      good: ["tania", "khaos"],
      avoid_with: []
    },
    formations: {
      light: ["maxim", "herukab", "patty"],
      debuff_burst: ["herukab", "aerposia", "tania"]
    },
    priorities: [
      "Monter le talent de +1 à +4 minimum",
      "Obtenir le Sceptre de l'Aube via événements",
      "Débloquer 7★ (Maîtrise de Combat)",
      "Acquérir Maxim pour le duo Lumière S-Tier"
    ]
  },

  patty: {
    name: "Patty",
    element: "Lumière",
    season: "S3",
    owned: true,
    current: { stars: 5, talent: 1, power: 1344465 },
    ratings: { eco: "S", pvp: "B", pve: "B", boss: "C" },
    tierNote: "D-Tier combat — S-Tier économie",
    rageRegen: "Moyenne",
    troopType: "Civil / Économie",
    source: "confirmed",
    skills: [
      { name: "Volonté de la Reine", type: "Active", desc: "Empêche la cible de régénérer sa Rage pendant 4 tours.", key: true },
      { name: "Éclat de la Vie", type: "Améliorée", desc: "Restaure 26% de PV à tous les alliés." },
      { name: "Code d'Or", type: "Passif", desc: "Restaure 5% de Rage/tour aux alliés Lumière pendant 6 tours au début du combat." },
      { name: "Protection du Désert", type: "Améliorée", desc: "Immunise tous les alliés contre les nouveaux debuffs pendant 2 tours. Indissipable." },
      { name: "Volonté d'Acier", type: "Locked", unlock: "6★", desc: "+30% Résistance Critique." }
    ],
    troopSkills: [
      { name: "Compétence", level: 1, value: "+120% ATQ troupe" },
      { name: "Vitesse de Collecte", level: 1, value: "+9%" },
      { name: "ATQ Ralliement", level: 1, value: "+16%" },
      { name: "Capacité de Troupe", level: 1, value: "+2 400" }
    ],
    weapon: {
      name: "Couronne de la Reine", stars: 5, level: 6,
      legion: { atq: "+9%", def: "+9%", pv: "+9%" },
      hero: { atq: 300, def: 300, pv: 600 },
      exclusive: [
        { trigger: "+0", effect: "DEF Troupe +100% ✓ actif" },
        { trigger: "+2", effect: "PV Troupe +100% (verrouillé)" },
        { trigger: "+4", effect: "Capacité Troupe +10 000 (verrouillé)" }
      ]
    },
    strengths: ["S économie (collecte, ralliement)", "Blocage Rage 4 tours mono-cible", "Code d'Or accélère Herukab dès T1", "Immunité debuff 2 tours (indissipable)"],
    weaknesses: ["D-Tier combat global", "Talent +1 — très sous-développée", "Soin 26% inférieur à Tania (44%)"],
    synergies: {
      best: ["herukab"],
      good: ["aerposia", "tania"],
      economy: ["tala"] // Duo économie pour la collecte et production
    },
    formations: {
      light: ["herukab", "patty", "maxim"],
      economy: "Déployer en collecte de ressources et ralliements"
    },
    priorities: [
      "Utiliser en collecte de ressources dès maintenant",
      "Monter héros +2 pour débloquer PV Troupe +100%",
      "Associer avec Herukab en formation Lumière",
      "Débloquer 6★ (Volonté d'Acier)"
    ]
  },

  tala: {
    name: "Tala",
    element: "Nature",
    season: null,
    owned: true,
    current: { stars: "6★ Ascendée (rouge)", talent: 8, weaponLevel: 30 },
    ratings: { rage_support: "S", eco: "S", pve: "A", boss: "B" },
    tierNote: "D-Tier méta combat — S-Tier support Rage + économie",
    rageRegen: "Lente",
    troopType: "Économie / Support",
    source: "confirmed",
    skills: [
      { name: "Étreinte Verte", type: "Active", desc: "200% dégâts + restaure complètement la Rage d'un allié aléatoire.", key: true },
      { name: "Désespoir", type: "Améliorée", desc: "Restaure 10% de Rage/tour à un allié aléatoire pendant 3 tours." },
      { name: "Revigoration", type: "Passif", desc: "Restaure complètement la Rage d'un allié aléatoire à sa mort." },
      { name: "Paysage", type: "Passif", desc: "Augmente l'ATQ de tous les alliés de 10% au début du combat. Indissipable." },
      { name: "Maîtrise de Combat", type: "Locked", unlock: "étoiles sup.", desc: "+30% Critique." }
    ],
    troopSkills: [
      { name: "Compétence", level: 8, value: "+500% ATQ troupe" },
      { name: "Ressources Sûres", level: 8, value: "+20%" },
      { name: "Production de Fer", level: 8, value: "+300%" },
      { name: "PV Troupe (Passif)", level: 8, value: "+150%" }
    ],
    weapon: {
      name: "Bourgeon de Vie", stars: 3, level: 30,
      note: "Niveau +30 — le plus haut du roster. Aperçu max 8★ +30.",
      exclusive_max: [
        { trigger: "+0", effect: "DEF Troupe +100%" },
        { trigger: "+2", effect: "PV Troupe +100%" },
        { trigger: "+4", effect: "ATQ Troupe +100%" },
        { trigger: "+6", effect: "ATQ Troupe +150% supplémentaires" }
      ]
    },
    strengths: ["Triple recharge Rage (active + continue + post-mortem)", "ATQ équipe +10% indissipable dès T1", "Production Fer +300%", "PV Troupe +150% passif"],
    weaknesses: ["D-Tier méta combat", "Rage personnelle Lente", "Synergies Rage aléatoires (pas ciblées)"],
    synergies: {
      best: ["aerposia", "dimina", "guan_yu"],
      good: ["boyd", "herukab"],
      economy: ["patty"]
    },
    formations: {
      rage_burst: ["aerposia", "tala", "tania"],
      nature: ["guan_yu", "dimina", "tala"],
      economy: "Production Fer + Patty (Collecte) = duo économie complet"
    },
    priorities: [
      "Utiliser en production de Fer dès maintenant (+300%)",
      "Former le duo Tala + Aerposia en PvP",
      "Monter les étoiles du Bourgeon de Vie",
      "Trio Nature : Tala + Dimina + Guan Yu"
    ]
  },

  // ═══════════════════════════════════════════════
  // HÉROS META À ACQUÉRIR (non possédés)
  // ═══════════════════════════════════════════════

  khaos: {
    name: "Khaos",
    element: "Dark",
    season: null,
    owned: false,
    ratings: { pvp: "S", pve: "S", boss: "S" },
    tierPosition: "1er du jeu — universel",
    rageRegen: "estimated: Moyenne/Rapide",
    troopType: "Toutes troupes",
    source: "meta",
    skills: [
      { name: "Compétence Active", type: "Active", desc: "Dégâts massifs — kit optimisé Boss ET PvP simultanément.", key: true },
      { name: "Pouvoirs Cachés", type: "Passif", desc: "Débloque des synergies uniques non disponibles sur d'autres héros Dark selon meta." }
    ],
    strengths: ["Seul héros S partout (PvP + PvE + Boss)", "Complète toutes les formations Dark", "Priorité absolue d'acquisition"],
    acquisition: "Éclats Boss Dark + Banners Dark (Hero Plaza)",
    synergies: {
      best: ["aerposia", "violette", "guan_yu"],
      good: ["tania", "dimina", "norris"]
    },
    formations: {
      pvp: ["khaos", "violette", "aerposia"],
      boss: ["guan_yu", "norris", "khaos"]
    }
  },

  violette: {
    name: "Violette",
    element: "Dark",
    season: null,
    owned: false,
    ratings: { pvp: "S", pve: "A", boss: "C" },
    rageRegen: "estimated: Moyenne",
    troopType: "estimated: Infanterie/Cavalerie",
    source: "meta",
    skills: [
      { name: "Compétence Active", type: "Active", desc: "Kit PvP S-Tier. Compagne naturelle d'Aerposia en Arène." }
    ],
    strengths: ["S PvP — ancre du trio Dark Arène", "A PvE — polyvalente", "Lore lié à Maxim (Lumière)"],
    acquisition: "Banners Dark + Royal Arms Race (shard sélection)",
    synergies: {
      best: ["khaos", "aerposia"],
      good: ["tania", "tala"]
    }
  },

  maxim: {
    name: "Maxim",
    element: "Lumière",
    season: null,
    owned: false,
    ratings: { pvp: "S", pve: "S", boss: "B" },
    rageRegen: "estimated: Rapide",
    troopType: "estimated: Toutes troupes",
    source: "meta",
    skills: [
      { name: "Compétence Active", type: "Active", desc: "Burst Lumière S-Tier — diversifie l'élément du roster vs Aerposia Dark." }
    ],
    strengths: ["S PvE et S PvP", "Beacon de la Lumière", "Complémentaire à Herukab et Patty"],
    acquisition: "Banners Lumière + événements",
    synergies: {
      best: ["herukab", "patty"],
      good: ["tania", "khaos"]
    }
  },

  guan_yu: {
    name: "Guan Yu",
    element: "Nature",
    season: null,
    owned: false,
    ratings: { pvp: "S", pve: "A", boss: "S" },
    rageRegen: "estimated: Moyenne",
    troopType: "estimated: Infanterie/Cavalerie",
    source: "meta",
    note: "Guan Yu 3★ > Dimina 5★ en Boss Alliance",
    skills: [
      { name: "Compétence Boss", type: "Active", desc: "Kit spécifiquement optimisé pour dégâts mono-cible prolongés — meilleur Boss du jeu." }
    ],
    strengths: ["Meilleur contributeur Boss du jeu (S Boss)", "S PvP + A PvE", "Synergise avec Dimina, Boyd, Tala (Nature)"],
    acquisition: "Éclats Boss Nature — monter les étoiles avant tout autre Nature",
    synergies: {
      best: ["norris", "khaos", "dimina"],
      good: ["tania", "boyd", "tala"]
    },
    formations: {
      boss: ["guan_yu", "norris", "khaos"],
      nature: ["guan_yu", "dimina", "boyd"]
    }
  },

  norris: {
    name: "Norris",
    element: "Feu",
    season: null,
    owned: false,
    ratings: { pvp: "B", pve: "A", boss: "A" },
    rageRegen: "estimated: Rapide",
    troopType: "estimated: Infanterie",
    source: "meta",
    note: "Fort en match-3 / Boss — vulnérable en PvP si DEF Down actif",
    skills: [
      { name: "Compétence Active", type: "Active", desc: "Fort dégâts en match-3. A Boss — secondaire Feu pour Boss Alliance." }
    ],
    strengths: ["A Boss — secondaire idéal pour formation Boss", "Bon en match-3 / PvE", "Complémentaire Anastasia + Guan Yu"],
    acquisition: "Banners Feu + éclats Boss Feu",
    synergies: {
      best: ["guan_yu", "khaos", "anastasia"],
      good: ["tutanhet"]
    }
  },

  anastasia: {
    name: "Anastasia",
    element: "Feu",
    season: null,
    owned: false,
    ratings: { pvp: "S", pve: "S", boss: "C" },
    rageRegen: "estimated: Rapide",
    troopType: "estimated: Cavalerie",
    source: "meta",
    skills: [
      { name: "Compétence Active", type: "Active", desc: "Premier carry Feu du jeu. S PvE et S PvP — miroir Aerposia sur l'élément Feu." }
    ],
    strengths: ["S PvP + S PvE", "Carry Feu dominant", "Complémentaire Tutanhet (paralysie + burst)"],
    acquisition: "Banners Feu + Astrology event (shard sélection)",
    synergies: {
      best: ["norris", "tutanhet"],
      good: ["khaos", "tania"]
    }
  },

  selantia: {
    name: "Selantia",
    element: "Glace",
    season: null,
    owned: false,
    ratings: { pvp: "A", pve: "B", boss: "A" },
    source: "meta",
    strengths: ["Bonne niche PvP et Boss", "Alternative Glace à Tania"],
    synergies: { best: ["tania"], good: ["khaos"] }
  },

  saya: {
    name: "Saya",
    element: "Feu",
    season: null,
    owned: false,
    ratings: { pvp: "B", pve: "A+", boss: "B" },
    troopType: "Civil — Capacité de troupe",
    source: "meta",
    note: "Héro économique clé F2P — augmente la capacité de troupe",
    strengths: ["Capacité troupe massivement augmentée", "Essentielle F2P pour progression"],
    synergies: { best: ["patty"], good: [] }
  },

  kanye: {
    name: "Kanye",
    element: "Feu",
    season: null,
    owned: false,
    ratings: { pvp: "A", pve: "A", boss: "A" },
    troopType: "Archer",
    source: "meta",
    note: "Versatile Archer A partout",
    strengths: ["A partout", "Boost Archer", "Bon partout sans exceller"],
    synergies: { best: ["dimina"], good: ["norris"] }
  }
};

/**
 * TABLEAU TIER LIST CONSOLIDÉ (meta juin 2026)
 */
const TIER_LIST = {
  S_universal: ["khaos"],
  S_pvp:       ["aerposia", "violette", "anastasia", "maxim"],
  S_pve:       ["anastasia", "maxim"],
  S_boss:      ["guan_yu", "khaos"],
  A_all:       ["dimina", "tania", "kanye"],
  A_pvp:       ["tutanhet", "boyd", "herukab", "patty_blocage"],
  A_boss:      ["norris", "selantia", "tania"],
  B_plus:      ["tania_boss", "saya", "norris_pvp"],
  D_noted:     ["tala", "boyd_global", "patty_combat", "tutanhet_meta"]
};

/**
 * FORMATIONS RECOMMANDÉES PAR LA META
 */
const META_FORMATIONS = {
  pvp_optimal:    { heroes: ["khaos", "violette", "aerposia"], note: "Trio Dark dominant Arène" },
  pvp_current:    { heroes: ["aerposia", "tania", "tala"],     note: "Formation opérationnelle roster actuel" },
  boss_optimal:   { heroes: ["guan_yu", "norris", "khaos"],    note: "Formation Boss obligatoire — tuiles : Vert → Rouge foncé → Violet" },
  pve_nature:     { heroes: ["guan_yu", "dimina", "tala"],     note: "Trio Nature PvE" },
  light:          { heroes: ["maxim", "herukab", "patty"],     note: "Formation Lumière S3" },
  cavalry_sustain: { heroes: ["aerposia", "tania", "tala"],    note: "Sustain cavalerie avec Rage" }
};

// Export pour utilisation dans les fiches HTML
if (typeof module !== 'undefined') module.exports = { HEROES_DB, TIER_LIST, META_FORMATIONS };

// ═══════════════════════════════════════════════
// AJOUT : FIONA (héros possédé — confirmé screenshots)
// ═══════════════════════════════════════════════

HEROES_DB.fiona = {
  name: "Fiona",
  element: "Feu",
  season: null,
  owned: true,
  current: { stars: 5, talent: 3, power: 1744515 },
  ratings: { pvp: "B", pve: "B+", boss: "C" },
  tierNote: "D-Tier méta globale — kit intéressant mais Rage Lente pénalisante",
  rageRegen: "Lente",
  troopType: "Civil — Entraînement",
  source: "confirmed",
  skills: [
    { name: "Souffle Infernal", type: "Active", desc: "193% de dégâts à TOUS les ennemis.", key: true },
    { name: "Flammes Draconiques", type: "Améliorée", desc: "Inflige des dégâts de poison à tous les ennemis pendant 6 tours." },
    { name: "Compagnon Drake", type: "Améliorée", desc: "Augmente l'ATQ de tous les alliés de 34% pendant 6 tours." },
    { name: "Explosion Crépuscule", type: "Passif", desc: "Auto-explosion à la mort : 140% dégâts à tous les ennemis." },
    { name: "Maîtrise de Combat", type: "Locked", unlock: "6★", desc: "+30% Critique. Chance de dégâts doubles." }
  ],
  troopSkills: [
    { name: "Compétence", level: 3, value: "+200% ATQ troupe" },
    { name: "Vitesse d'Entraînement", level: 3, value: "+15%" },
    { name: "Coût d'Endurance ↘", level: 3, value: "-9%" },
    { name: "Coût d'Entraînement ↘", level: 3, value: "-9%" }
  ],
  weapon: {
    name: "Corne de Dragon", stars: null, level: null,
    note: "Non obtenu — aperçu maximal 8★ +30",
    legion_max: { atq: "+106%", def: "+106%", pv: "+106%" },
    exclusive_max: [
      { trigger: "+0", effect: "Vitesse de construction +50%" },
      { trigger: "+2", effect: "Vitesse de guérison de tente médicale +50%" },
      { trigger: "+4", effect: "Vitesse de recherche +50%" },
      { trigger: "+6", effect: "Vitesse d'entraînement +100%" }
    ]
  },
  strengths: [
    "AoE totale 193% + Poison 6 tours (DoT prolongé)",
    "Buff ATQ équipe +34% / 6 tours — le plus long du roster",
    "Explosion Crépuscule : 140% dégâts AoE à sa mort",
    "Triple effet (Dégâts + Poison + Buff ATQ) en un seul tour",
    "Compétences troupe : réduction coûts entraînement (-9% ×2)"
  ],
  weaknesses: [
    "Rage Lente — s'active rarement sans support Rage",
    "D-Tier méta globale",
    "193% AoE inférieur à Herukab (264% × 2)",
    "Corne de Dragon non obtenue",
    "6★ verrouillées"
  ],
  synergies: {
    best: ["anastasia", "tutanhet", "tala"],
    good: ["tania", "khaos", "norris"],
    rage_support: ["tala"] // Tala compense la Rage Lente
  },
  formations: {
    fire_aoe: ["anastasia", "fiona", "tutanhet"],
    economy: "Déployer pour réduire les coûts d'entraînement des troupes"
  },
  priorities: [
    "Utiliser pour réduire les coûts d'entraînement des troupes dès maintenant",
    "Associer avec Tala pour compenser la Rage Lente",
    "Obtenir la Corne de Dragon via événements (+100% vitesse entraînement au max)",
    "Débloquer 6★ (Maîtrise de Combat +30% Crit)",
    "Acquérir Anastasia — carry Feu S qui maximise la formation"
  ]
};
