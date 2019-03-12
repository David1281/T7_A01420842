import { TypescriptFSMStates } from './model/Constants/TypescriptFSMStates';
import { CharacterCodes } from './model/Constants/CharacterCodes';
import { Component } from '@angular/core';
import { Lexer } from './model/Classes/Lexer';
import { Token } from './model/Classes/Token';
import { TokenTypes } from './model/Constants/TokenTypes';

const AU = 148, AW = 150, AV = 149, AX = 151;
const AY = 152, AZ = 153;

let tokenV = 0;
let i = 0;
let tokens: Token[];
let newTokens : Token[];

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'AnalizadorLexicoTypescript2';
	public lexer: Lexer;
	public input: string;
	public tokenLinesUI: Token[][] = [];
	public error: string;
	public characterCodesUI: string[];
	public statesUI: string[];
        
	ngOnInit(){
		
	}	

	readFile(e){
		let file = e.target.files[0];
		if(!file){
			return;
		}

		let reader = new FileReader();
		reader.onload = (ef) => {
			this.input = (<any>ef).target.result;
			console.log("Input: ", this.input);
			this.lexer = new Lexer(this.input);
			this.buildUITransitionMatrix();
			this.startLexicalAnalysis();
		}
		reader.readAsText(file);
	}	

	startLexicalAnalysis(){
		try{
			tokens = this.lexer.tokenize();
			console.log("tokens", tokens);					
		}catch(e){
			console.log("Lexical Analysis failed: ", e.message);
			this.error = "Lexical Analysis failed: " + e.message;
			tokens = e.currentTokens;
		}	

		if(tokens){
			let currentLine = tokens[0].Line;
			this.tokenLinesUI[currentLine] = [];
			
			tokens.forEach(token => {
				if(currentLine != token.Line){
					currentLine = token.Line;
					this.tokenLinesUI[currentLine] = [];
				}

				this.tokenLinesUI[currentLine].push(token);
			});	
		}	
       

       tokenV = this.getToken();
       console.log(tokenV);
       this.S();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

	}

    
    getToken(){
    	console.log(tokenV);
       return tokenV = tokens[i].Type;
    }
    move1(){
      try{
      i++;
      tokenV = this.getToken();
      }
      catch(e){
      	console.log("Cadena validada");
      }
      
    }
    consume(t){
       if(t == tokenV)
       	  this.move1();
       	else
       	  this.error1();
    }
    
    S(){
		  if(tokenV == AU)
		        this.consume(AU); this.B(); this.D(); this.consume(AZ);
    }

	B(){
	if(tokenV == AW)
	        this.consume(AW); this.BP();
	}
    BP(){
        switch(tokenV){
	      case AV:
	        this.consume(AV); this.BP();
	      case AX:
	      case AY:
	      case AZ:
	         return;
	      default:
	          this.error1();
	      break;    
        }
    }
    D(){
    switch(tokenV){
     case AX:
       this.E();  this.F();
     case AY:
       this.E();  this.F();
     case AZ:
       return;
     default:
       this.error1();
     break; 
     }
    }

    E(){
	  switch(tokenV){
	    case AX:
	    case AZ:
	     return;
	    case AY:
	     this.consume(AY);
	    break;
	   default:
	    this.error1();
	   break;
	   }
	}
    F(){
		switch(tokenV){
		    case AZ:
		      return;
		    case AX:
		    this.consume(AX);
		   break;
		default:
		this.error1();
		break;
		}
     }


 
   

    /*
    E(){
        if(tokenV == PIZQ || tokenV == NUM || tokenV == ID){
            this.T(); this.EP();
        }else{
        	this.error1();
        }
    }

    EP(){
    	switch (tokenV) {
    		case MAS:
    			this.consume(MAS); this.T(); this.EP();
    		break;
    		case MENOS:
    			this.consume(MAS); this.T(); this.EP();
    		break;
    		case PDER:
 		
    		case PESO:
    		
    		return;
    		default:
    			this.error1();
    	    break;
    	}
    }
    
    T(){
    	if(tokenV == PIZQ || tokenV == NUM || tokenV == ID){
    		console.log("vas bien");
    		this.F(); this.TP();
    	}  		
    	else
    		this.error1();
    }

    TP(){
    	switch (tokenV) {
    		case MAS:
    		
    		case MENOS:
    			
    		case PIZQ:
 		
    		case PESO:  		
    		return;
            case POR:
              this.consume(POR); this.F(); this.TP();

    		case DIV:
    		  this.consume(DIV); this.F(); this.TP();
    		break;  
    	}
    }
    F(){
          switch (tokenV) {
    		case PIZQ:
    		   this.consume(PIZQ); this.E(); this.consume(PDER);
    		   break;
    		case NUM:
    			this.consume(NUM);
    			break;
    		case ID:
 		         this.consume(ID);
    		break;  
    	} 

    }*/

    error1(){
        console.log("Error in  column: "+ tokens[i].Column + " line: "+ tokens[i].Line);
    }
     

	buildUITransitionMatrix(){
		this.characterCodesUI = [];
		this.statesUI = [];
		for(let item in CharacterCodes){
            if(isNaN(Number(item))){
                this.characterCodesUI.push(item);
            }             
		}

		for(let item in TypescriptFSMStates){
			if(isNaN(Number(item))){
				this.statesUI.push(item);
            }    
		}
		
		console.log('characterCodesUi', this.characterCodesUI);
		console.log('statesUI', this.statesUI);
	}
}
