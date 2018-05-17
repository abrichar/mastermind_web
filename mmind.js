var casetab ;
var code = new Array();
var verif_prop = new Array();
var verif_code = new Array();
var ligne = 1;
var colonne = 1;
var trouve = 0


function init()
{
    var liste_couleur = new Array ("rouge","vert","bleu","jaune","orange","mauve");
    var alea;
    var x;
    for (x = 0; x <= 3; x++)
    {
        alea = Math.floor(Math.random()*6);
        code[x] = liste_couleur[alea];
    }
    afficher_code()
}

function afficher_code()
{
    var cpt;
    for (cpt = 0; cpt < 4; cpt++)
    {
        var case_code = "R" + (cpt+1);
        document.getElementById(case_code).className = code[cpt];
    }
}


function mettre_rouge()
{
        
        if(colonne != 5)
            {
        casetab = "P"+ligne+colonne
    document.getElementById(casetab).className = "rouge";       
        colonne = colonne + 1;
            }
            else if(colonne == 5)
            {
                alert("vous avez atteint le bout de la ligne")
            }
}

function mettre_vert()
{
        
        if(colonne < 5)
            {
        casetab = "P"+ligne+colonne
    document.getElementById(casetab).className = "vert";
        colonne = colonne + 1;
            } 
            else if(colonne == 5)
            {
                alert("vous avez atteint le bout de la ligne") 
            }
}

function mettre_jaune()
{
        
        if(colonne < 5)
            {
        casetab = "P"+ligne+colonne;
    document.getElementById(casetab).className = "jaune";
        colonne = colonne + 1;
            } 
            else if(colonne == 5)
            {
                alert("vous avez atteint le bout de la ligne")
            }
}

function mettre_bleu()
{
        
        if(colonne < 5)
            {
                    casetab = "P"+ligne+colonne;
    document.getElementById(casetab).className = "bleu";
        colonne = colonne + 1;
            } 
        else if(colonne == 5)
            {
                alert("vous avez atteint le bout de la ligne") 
            }
            
}

function mettre_orange()
{
        
        if(colonne < 5)
            {
        casetab = "P"+ligne+colonne;
    document.getElementById(casetab).className = "orange";
        colonne = colonne + 1;
            } 
        else if(colonne == 5)
            {
                alert("vous avez atteint le bout de la ligne") 
            }
}

function mettre_mauve()
{   
        
        if(colonne < 5)
            {
        casetab = "P"+ligne+colonne;
    document.getElementById(casetab).className = "mauve";
        colonne = colonne + 1;
            } 
        else if(colonne == 5)
            {
                alert("vous avez atteint le bout de la ligne")
            }
}

function valider()
{
    var colonne1 = 1    
    var colonnerepon = 1
    var colonne2 = 2
    var colonne3 = 3 
    var colonne4 = 4
    var caseverif1 = "P"+ligne+colonne1
    var caserep = "V"+ligne+colonnerepon
    var caseverif2 ="P"+ligne+colonne2
    var caseverif3 = "P"+ligne+colonne3
    var caseverif4 = "P"+ligne+colonne4
    var casewin1 = "non"
    var casewin2 = "non"
    var casewin3 = "non"
    var casewin4 = "non"
    var caserep1 = "V"+ligne+"1"
    var caserep2 = "V"+ligne+"2"
    var caserep3 = "V"+ligne+"3"
    var caserep4 = "V"+ligne+"4"

 
//case verification 1 
if(code[0]== document.getElementById(caseverif1).className)
    { 
        casewin1 = "oui"
        caserep = "V"+ligne+colonnerepon
        document.getElementById(caserep).className = "noir"
        colonnerepon = colonnerepon + 1
    }else if(code[0] == document.getElementById(caseverif2).className)
    { 
    casewin2 = "oui"
    caserep = "V"+ligne+colonnerepon
    document.getElementById(caserep).className = "blanc"   
    colonnerepon = colonnerepon + 1
    }else if(code[0] == document.getElementById(caseverif3).className)
        {
            casewin3 = "oui"
            caserep = "V"+ligne+colonnerepon
            document.getElementById(caserep).className = "blanc"
            colonnerepon = colonnerepon + 1
        }else if(code[0] == document.getElementById(caseverif4).className)
            {
               casewin4 = "oui"
               caserep = "V"+ligne+colonnerepon
               document.getElementById(caserep).className = "blanc"
               colonnerepon = colonnerepon + 1 
            }
 
            
//case verification 2 
if(code[1]== document.getElementById(caseverif2).className)
    {
        casewin2 = "oui"
        caserep = "V"+ligne+colonnerepon
        document.getElementById(caserep).className = "noir"
        colonnerepon = colonnerepon + 1
    }else if(code[1] == document.getElementById(caseverif1).className && casewin1 == "non")
    {
    casewin1 = "oui"
    caserep = "V"+ligne+colonnerepon
    document.getElementById(caserep).className = "blanc"   
    colonnerepon = colonnerepon + 1
    }else if(code[1] == document.getElementById(caseverif3).className && casewin3 == "non")
        {
            casewin3 = "oui"
            caserep = "V"+ligne+colonnerepon
            document.getElementById(caserep).className = "blanc"
            colonnerepon = colonnerepon + 1
        }else if(code[1] == document.getElementById(caseverif4).className && casewin4 =="non")
            {
               casewin4 = "oui"
               caserep = "V"+ligne+colonnerepon
               document.getElementById(caserep).className = "blanc"
               colonnerepon = colonnerepon + 1 
            }

               
       
//case verification 3

if(code[2] == document.getElementById(caseverif3).className)
    {
        casewin3 = "oui"
        caserep = "V"+ligne+colonnerepon
        document.getElementById(caserep).className = "noir"
        colonnerepon = colonnerepon + 1
    }else if(code[2] == document.getElementById(caseverif1).className && casewin1 == "non")
    {
    casewin1 = "oui"
    caserep = "V"+ligne+colonnerepon
    document.getElementById(caserep).className = "blanc"   
    colonnerepon = colonnerepon + 1
    }else if(code[2] == document.getElementById(caseverif2).className && casewin2 == "non")
        {
            casewin2 = "oui"
            caserep = "V"+ligne+colonnerepon
            document.getElementById(caserep).className = "blanc"
            colonnerepon = colonnerepon + 1
        }else if(code[2] == document.getElementById(caseverif4).className && casewin4 == "non")
            {
               casewin4 = "oui"
               caserep = "V"+ligne+colonnerepon
               document.getElementById(caserep).className = "blanc"
               colonnerepon = colonnerepon + 1 
            }
 


//case verification 4

if(code[3] == document.getElementById(caseverif4).className)
    {
        casewin4 = "oui"
        caserep = "V"+ligne+colonnerepon
        document.getElementById(caserep).className = "noir"
        colonnerepon = colonnerepon + 1
    }else if(code[3] == document.getElementById(caseverif1).className && casewin1 == "non")
    {
    casewin1 = "oui"
    caserep = "V"+ligne+colonnerepon
    document.getElementById(caserep).className = "blanc"   
    colonnerepon = colonnerepon + 1
    }else if(code[3] == document.getElementById(caseverif2).className && casewin2 == "non")
        {
            casewin2 = "oui"
            caserep = "V"+ligne+colonnerepon
            document.getElementById(caserep).className = "blanc"
            colonnerepon = colonnerepon + 1
        }else if(code[3] == document.getElementById(caseverif3).className && casewin3 == "non")
            {
               casewin3 = "oui"
               caserep = "V"+ligne+colonnerepon
               document.getElementById(caserep).className = "blanc"
               colonnerepon = colonnerepon + 1 
            }


 if(document.getElementById(caserep4).className == "noir")
     {
         if(document.getElementById(caserep1).className == "blanc")
             {
                 document.getElementById(caserep4).className = "blanc"
                 document.getElementById(caserep1).className = "noir"
             }else if(document.getElementById(caserep2).className == "blanc")
                 {
                     document.getElementById(caserep2).className = "noir"
                     document.getElementById(caserep4).className = "blanc"
                 }else if(document.getElementById(caserep3).className == "blanc")
                     {
                         document.getElementById(caserep4).className = "blanc"
                         document.getElementById(caserep3).className = "noir"
                     }
                
          
     }
  
     if(document.getElementById(caserep3).className == "noir")
         {
              if(document.getElementById(caserep1).className == "blanc")
             {
                 document.getElementById(caserep3).className = "blanc"
                 document.getElementById(caserep1).className = "noir"
           }else if(document.getElementById(caserep2).className == "blanc")
                 {
                     document.getElementById(caserep2).className = "noir"
                     document.getElementById(caserep3).className = "blanc"
                 }
         }
         if(document.getElementById(caserep2).className == "noir" && document.getElementById(caserep1) == "blanc")
                 {
                     document.getElementById(caserep1).className = "noir"
                     document.getElementById(caserep2).className = "blanc"
                 }
    
     if(document.getElementById(caserep4).className == "noir")
         {
             alert("Vous avez gagne")
             afficher_code()
             alert("Si vous voulez rejouer, appuyer sur f5 pour actualiser la page ! ")
         }
     
            if(colonne == 5 )
                {
                colonne = 1 
                ligne = ligne + 1 
                }
                
                
            
        
        
}

function effacer()
{
    while(colonne != 1)
        {   
            document.getElementById(casetab).className = "transparent"
            colonne = colonne -1 
            casetab = "P"+ligne+colonne
        }
            document.getElementById(casetab).className = "transparent"
        
}

function retour()
{
    if(colonne != 1)
        {
    colonne = colonne - 1 
    var casetab1 = "P"+ligne+colonne
    document.getElementById(casetab1).className = "transparent"
        }
}