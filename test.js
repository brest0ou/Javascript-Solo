

 //Jeu nombre magique 

Math.random(); // je peux définir le NombreMagique ici mais il sera en float exemple : 4.01456132132131

 const NB_MIN = 0;
 const NB_MAX = 6;
 let NB_VIE = 4;
while(true)
{
    console.log("Bienvenue dans le test javascript de diogo");

    console.log("===========================================");

    console.log("vous entrez dans le jeu ' Nombre-Magique' ");

    let nombreMagique = Math.floor(Math.random() * NB_MAX) ;// je définie le nombre magique en "entier"  exemple : 4

    console.log(`Bonjour bienvenue dans le nombre magique \n
    veuillez saisir un nombre entre ${NB_MIN} et ${NB_MAX}: `);
  
    for (let i =0; i < 5 ; i++)
    {
        console.log(`le nombre magique : ${nombreMagique}`);

        var reponse = prompt();  // je lui demande de saisir un nombre

        console.log(` vous venez de saisir le nombre : ${reponse}`); // j'affiche la reponse de l'utilisateur
        

        
        
        console.log("il vous reste : " + NB_VIE + " Vies");
        if(reponse == nombreMagique)
        {
            console.log(`félicitation vous avez trouver le nombre magique`);
            break;
        }
        NB_VIE--;
    };

    console.error("je suis sortie de la boucle for")

    
    console.info(`Vous voulez recommencer o/n?`);
    var reponseReco = prompt();
    if(NB_VIE == 0)
    {
        console.error(`Vous avez perdue ! `);

    };
        
    if(reponseReco == "o")
    {
        NB_VIE = 4;
    };

    if(reponseReco == "n")
    { 
        console.error("Aurevoir à bientot")
        break;
    };
};



    
    


    
    




 
