export const dadosFrame = {
  patch: "1.0.0",
  personagens: [
    {
      id: "terry",
      nome: "Terry Bogard",
      estilo: "Equilibrado",
      golpes: [
        {
          nome: "Standing LP",
          comando: "LP",
          categoria: "Normal",
          startup: 5,
          active: 3,
          recovery: 8,
          vantagemHit: "+4",
          vantagemBlock: "+1",
          observacoes: "Golpe rapido para pressao."
        },
        {
          nome: "Burn Knuckle",
          comando: "236 + P",
          categoria: "Especial",
          startup: 14,
          active: 6,
          recovery: 21,
          vantagemHit: "Knockdown",
          vantagemBlock: "-6",
          observacoes: "Avanca bastante. Cuidado se bloqueado."
        }
      ]
    },
    {
      id: "rock",
      nome: "Rock Howard",
      estilo: "Balanceado",
      golpes: [
        {
          nome: "Standing LK",
          comando: "LK",
          categoria: "Normal",
          startup: 6,
          active: 3,
          recovery: 10,
          vantagemHit: "+3",
          vantagemBlock: "-1",
          observacoes: "Bom poke de perto."
        },
        {
          nome: "Rising Tackle",
          comando: "623 + P",
          categoria: "Especial",
          startup: 7,
          active: 8,
          recovery: 28,
          vantagemHit: "Knockdown",
          vantagemBlock: "-18",
          observacoes: "Usar como anti-air ou reversao."
        }
      ]
    }
  ]
};