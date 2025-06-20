export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-noirElegant text-roseClair p-6 flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-6">
        <h1 className="text-5xl font-glamour text-center mb-8">Politique de confidentialité</h1>

        <p className="text-lg font-elegant">
          Le site <strong>« Téléphone Rose IA »</strong> respecte scrupuleusement les obligations du Règlement Général sur la Protection des Données (RGPD).
        </p>

        <h2 className="text-2xl font-glamour mt-6">1. Données collectées</h2>
        <p className="text-lg">
          Lors de l’inscription, nous collectons uniquement un identifiant (pseudo) et un mot de passe chiffré. 
          Aucune autre donnée personnelle n’est requise.
        </p>

        <h2 className="text-2xl font-glamour mt-6">2. Cookies</h2>
        <p className="text-lg">
          Ce site utilise uniquement des cookies techniques indispensables au fonctionnement du service, notamment pour gérer votre session de connexion.
          Aucun cookie publicitaire ou de suivi n’est utilisé.
        </p>

        <h2 className="text-2xl font-glamour mt-6">3. Conversations</h2>
        <p className="text-lg">
          <strong>Les conversations échangées avec l’intelligence artificielle ne sont pas enregistrées ni stockées.</strong> 
          Elles sont traitées en temps réel et ne sont pas conservées après la session.
          Cela garantit la confidentialité totale de vos échanges.
        </p>

        <h2 className="text-2xl font-glamour mt-6">4. Partage de données</h2>
        <p className="text-lg">
          Aucune donnée personnelle n’est transmise ou revendue à des tiers. Nous garantissons la confidentialité des informations traitées.
        </p>

        <h2 className="text-2xl font-glamour mt-6">5. Vos droits</h2>
        <p className="text-lg">
          Conformément au RGPD, vous disposez d’un droit d’accès, de modification ou de suppression de vos informations. 
          Pour toute demande, vous pouvez nous contacter via le mail suivant : telephoneroseia@contact.fr.
        </p>

        <p className="text-center text-roseClair/70 mt-12 text-sm">
          Dernière mise à jour : Juin 2025
        </p>
      </div>
    </div>
  );
}
