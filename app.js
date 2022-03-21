var numbers=["0","1","2","3","4","5","6","7","8","9"];
var symbols=["-","*","/","+","-","!","#","%",".",","]
var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y","z"];
var yourPass=[];
var shuffler=[];
var cart=[];
var passwordSaves={
    nameFor: String,
    passFor: String
     
};
var childSecen=0;
var counter=1;


$("#passwordButton").on("click", ()=> {
    
     $(".saver").remove();
     $("#kayit").remove();
    //yourPass.push(randomForCapitalize);
        createPassElements();
        showPass();
        yourPass= [];
        

        $(".saver").on("click", () => 
        {

            var nameFor=$("#kayit").val();
            var passFor=$("#showPasswordInput").val();
            
            cart.push(passwordSaves.extend =({
                nameFor: nameFor,
                passFor: passFor
             }));
                        var anaSatir=document.createElement("tr");
                        $("#table1").append(anaSatir);
                        anaSatir.setAttribute("id",childSecen)
                        var satirSay=document.createElement("td");
                        var siteName=document.createElement("td");
                        var showPassword=document.createElement("td");
                        var secici=$("#"+childSecen);
                        secici.append(satirSay);
                        secici.append(siteName);
                        secici.append(showPassword);
                        satirSay.setAttribute("id","siraContent");
                        siteName.setAttribute("id","siteContent");
                        showPassword.setAttribute("id","passwordContent");
                        childSecen++;
                    
                        $(satirSay).html(counter++);
                        $(siteName).html(nameFor);
                        $(showPassword).html(passFor);
                        $("#showPasswordInput").val("");
                        $("#kayit").val("");          
        });
});

function shufflePassword () {
    
    for(let i=yourPass.length-1;i>0;i--)
    { //durstenfeld shuffle alghortim
        const j=Math.floor(Math.random()*(i+1));
        [yourPass[i], yourPass[j]]=[yourPass[j], yourPass[i]]; 
        
       /*  var temp=yourPass[i];
        yourPass[i]=yourPass[j];
        yourPass[j]=temp; */
    }
    var saveToTableButton= document.createElement("button");
    var passForWhat=document.createElement("input");
    passForWhat.setAttribute("id","kayit");
    showButton=$(".saverContainer");
    $(showButton).append(saveToTableButton);
    $(showButton).append(passForWhat);
    saveButton=$("button");
    saveButton.addClass("saver");
    $("#kayit").attr("placeholder","Text for Save")
    saveButton.html("Save me to use")
}


function createPassElements () {
        for(let i=0; i<=2;i++) 
            {
            var randomForNumber=Math.floor(Math.random()*10);
            yourPass.push(randomForNumber);
            }
        for(let i=0; i<=1;i++) {
            var randomForSymbol=Math.floor(Math.random()*symbols.length);
            yourPass.push(symbols[randomForSymbol]);
        }
        for (let i=0; i<=6;i++) {
            var randomForCapitalize=Math.floor(Math.random()*3);
            var randomForLetter=Math.floor(Math.random()*letters.length);
            let bigOrNot=letters[randomForLetter];
            let saveit;
            if(randomForCapitalize>1) {
                saveit=bigOrNot.toUpperCase();
            }
            else {
                saveit=bigOrNot;
            }
            yourPass.push(saveit);     
        }
        shufflePassword();
}
function showPass () {
    $("#showPasswordInput").val(yourPass.join(""))
}