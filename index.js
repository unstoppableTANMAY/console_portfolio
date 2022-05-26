const textarea = document.querySelector('.textarea');
const static = document.querySelector('.static');
const main = document.querySelector('.main');

var textareasize = 30;
var prevcmd = "help";

var folder = (window.innerWidth<450)?'📁':"🗁 ";
var arrow = (window.innerWidth<450)?"›":"🢖";

const startcode = `╭╼ ${folder}~/hackerone/master 
╰─${arrow} `;

const rotatewait = ['-','\\','|','/'];
window.onload = function() {
    textarea.focus();
  }
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const commands = ["help","ls","cls","vim","cd","cd home","cd about","cd projects","cd contacts","vim readme.txt","tanmay","portfolio","switch","github","instagram","twitter","facebook"]

const updatevalue = () => {
    if(textarea.innerHTML.includes("<br>")){
        checkcode(textarea.innerText.toLowerCase().trim());
        prevcmd = textarea.innerText.toLowerCase().trim();
    }
    if(!!commands.find((item) =>item==textarea.innerText.toLowerCase().trim()))textarea.classList.add("colored");else textarea.classList.remove("colored");
    textareasize++;
    }

textarea.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkcode(textarea.innerText.toLowerCase().trim());
        prevcmd = textarea.innerText.toLowerCase();
    }
    if (event.key === "ArrowUp") {
        event.preventDefault();
        textarea.innerHTML = prevcmd;
    }
  });

async function checkcode(code){
    var temp = static.innerText;
    await sleep(500);
    if(code==="cls"){
        static.innerText = startcode;
    }
    else if(code==="ls"){
        static.innerText = temp + prevcmd;
        static.innerText += `\n\thome\n\tabout\n\tprojects\t(open folders with "cd foldername")\n\tcontacts\t(open files with "vim filename")\n\treadme.txt\n`
        static.innerText += '\n' + startcode;
    }
    else if(code==="tanmay"){
        static.innerText = temp + prevcmd;
        static.innerText += `\n
        |@@@@@@//@@@@@@@@//@@|
        |@@@@@//@@@@@@@@//@@@|        Tanmay Kumar Panda
              |@@@@@|    |@@@|        2nd year CSE
              |@@@@@|   /@@@/         +91 7008651763
              |@@@@@| /@@@/           tanmaypanda752@gmail.com
              |@@@@@|@@@/             
              |@@@@@|@/               github linkedin instagram twiter
              |@@@@@|
              |@@@@@|\n`;
        static.innerText += '\n' + startcode;
    }
    else if(code==="cd home"){
        static.innerText = temp + prevcmd;
        static.innerText += `
                                  Home
                   -@                
                  .##@               
                 .####@              help ~ All command list.  
                 @#####@             ls ~ All tabs in this website.
               .*#######@            tanmay ~ All details about me.
              .##@o@#####@           cls ~ Clean the prompt.  
             /############@          cd ____ ~ Changing tabs. 
            /##############@         
           @######@*%*######@        
          @######%     %#####o       
         @######@       ######%      
       -@#######h       ######@%    
      /#####h**"         "**%@###\   
     @H@*                      *%#@  
    *'                            '* 
        `;
        static.innerText += '\n' + startcode;
    }
    else if(code==="cd about"){
        static.innerText = temp + prevcmd;
        static.innerText += `
                                About

                I am a Web Developer and Ui/Ux Designer.
        I use React and other framework to frontend and Node Js
        to Backend Developement. I am a student persuing B.tech
        Degree In GCEK Bhawanipatana in CSE branch.

        Age - 21                  Qualification - B.tech

        Phone - +91 7008651763    Email - tanmaypanda752@gmail.com 

        Pin - 756047              Nationality - Indian

        `;
        static.innerText += '\n' + startcode;
    }
    else if(code==="cd projects"){
        static.innerText = temp + prevcmd;
        static.innerText += `
                            Projects

Covid Data          it is a web site to view all data about covid
                    in every state districts with all details like
                    confirmed total and vaccinated.

                    link - https://github.unstoppableTANMAY/coviddata

Portfolio           it is my personal portfoli designed and created
                    by me for my personal purposes it has all details
                    about me and my carrier.

                    link - https://github.unstoppableTANMAY/portfolio

`;
        static.innerText += '\n' + startcode;
    }
    else if(code==="cd contacts"){
        static.innerText = temp + prevcmd;
        static.innerText += `
                            Contacts

        Phone : +91 7008651763

        Email : tanmaypanda752@gmail.com

        github : https://github.com/unstoppableTANMAY

        instagram : https://instagram.com/unstoppable_tanmay/

        twitter : https://twitter.com/jOErNepiPo1W85Q

        facebook : https://www.facebook.com/tanmay.panda.16100
       
`;
        static.innerText += '\n' + startcode;
    }
    else if(code==="help"){
        static.innerText = temp + prevcmd;
        static.innerText += `
                            Helpx

        "ls" ~ for all tabs
        "cls" ~ for clear console
        "cd foldername" ~ for changing tabs
        "vim filename" ~ for opening text files
        "portfolio" ~ for downloading portfolio
        "tanmay" ~ for about me
        "github/instagram/twitter/facebook" ~ for direct site
        "switch" ~ for switching to graphics mode
`;
        static.innerText += '\n' + startcode;
    }
    else if(code==="portfolio"){
        for(var i=0;i<10;i++){
            var temp1;
            for(var j=0;j<4;j++){
                temp1=rotatewait[j];
                textarea.innerText = "";
                textarea.innerText =`waiting ${temp1}`;
                await sleep(100);
            }
        }
        window.open('https://drive.google.com/file/d/1aGShas8GkM-EK7i6sM_MnbzxyoM3kKMk/view?usp=sharing');
        static.innerText += "Downloaded" + '\n' + startcode;
    }
    else if(code==="vim readme.txt"){
        static.innerText = temp + prevcmd;
        static.innerText += `
        ~ readme.txt

        This is my website.
        if you want tomake a website you can contact me.
        follow me on my social media account.

        all commands are in between help command.

        if any doubt contact in contact page
`;
        static.innerText += '\n' + startcode;
    }
    else if(code==="github"){
        window.open('https://github.com/unstoppableTANMAY', '_blank');
    }
    else if(code==="instagram"){
        window.open('https://instagram.com/unstoppable_tanmay/', '_blank');
    }
    else if(code==="twitter"){
        window.open('https://twitter.com/jOErNepiPo1W85Q', '_blank');
    }
    else if(code==="facebook"){
        window.open('https://www.facebook.com/tanmay.panda.16100', '_blank');
    }
    else if(code==="switch"){
        window.open('https://github.com/unstoppableTANMAY/portfolio', '_self');
    }
    else{
        static.innerHTML += `${prevcmd} is not a valid command...`;
        static.innerText += '\n' + startcode;
    }
    textarea.innerText = "";
}   
