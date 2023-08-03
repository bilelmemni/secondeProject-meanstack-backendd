
const Commande = require('../models/commande');
const Produit = require('../models/product');


// API pour passer une commande et Diminuer les quantite des produits
exports.createCommande = async (req, res) => {
  try {
    const { totalPrix, produits, client } = req.body;
    const CommandeProduits = await Produit.find({ _id: { $in: produits } });
  
    const commande = await Commande.create({ totalPrix, produits, client });
  
    for (const Produit of CommandeProduits) {
      Produit.Quantite -= 1;
      await Produit.save();
    }
    res.status(201).json(commande);
  } catch (error) {
    res.status(500).json({ error: ' server error' });
  }
};
// API pour  la liste des commandes
exports.Listcommande = async (req, res) => {
  try {
    const commandes = await Commande.find().populate('produits').populate('client');//populate yjib ya3ml affichage lel donne lkol eli fost populate
    res.json(commandes);
  } catch (error) { 
    res.status(500).json({ error: ' server error' });
  }
};
// API pour  les details d'une commande
exports.detailscommande = async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id).populate('produits').populate('client');
    if (commande) {
      res.json(commande);
    } else {
      res.status(404).json({ error: 'Commande not found' });
    }
  } catch (error) {
    res.status(500).json({ error: ' server  error' });
  }
};


