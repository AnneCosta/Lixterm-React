import React, { useState, createRef } from 'react'
import Terminal from 'react-console-emulator'
// import { auth } from '../../services/firebase'
// import { useAuthState } from 'react-firebase-hooks/auth'
import './styles.css'

export default function CmdComp({ name }) {
	const usrPrompt = name + "@/LixTerm:~$ "
	const term = createRef();
	// const [ user ] = useAuthState(auth)
	const [prompt, setPrompt] = useState(usrPrompt);
	const [home, setHome] = useState('LixTerm');
	const [dir, setDir] = useState({
		LixTerm: [],
	});

	// const handleOutput = async (param) => {
	// 	if(user) {
	// 		const dataCmd = await getDocs(commandCollectionRef)
	// 		const commandInfo = dataCmd.docs.map((doc) => ({ ...doc.data(), id:doc.id }))
	// 		let cmdCreated = Object.keys(cmds).map(key => cmds[key]);

	// 		const cmdDatabase = commandInfo.map((teste) => ({ command: teste.command }))
	// 		const cmdExisted = cmdCreated.map((inf) => ({ name: inf.name }))

	// 		const uidDatabase = commandInfo.map((x) => ({ uid: x.uid }))
	// 		const foundUser = uidDatabase.some(el => el.uid === user.uid )

	// 		const foundDb = cmdDatabase.some(el => el.command === param )
	// 		const foundCmd = cmdExisted.some(el => el.name === param)
	

	// 		if(!foundUser) { 
	// 			if(foundCmd){
	// 				await addDoc(commandCollectionRef, {
	// 					uid: user.uid,
	// 					command: param
	// 				});
	// 			}
	// 		} else if (foundUser && !foundDb) { 
	// 			if(foundCmd){
	// 				await addDoc(commandCollectionRef, {
	// 					uid: user.uid,
	// 					command: param
	// 				});
	// 			}
	// 		}

	// 	} else { return; }
	// }

	const styles = {
		default: { width: "100%", maxHeight: 300, overflow: "auto", textAlign: 'left' },
		inputA: {
			 display: "flex",
			 alignItems: "center",
			 justifyContent: "center",
		},
		inputText: { color: "white" },
		promptL: { color: "#5AA5C9", fontWeight: "bold" },
		msgText: { color: "#A2BDC7", fontWeight: "300" },
 };

 const sudoCommands = [
		"sudo -l - Lista os comandos com privilégios root \n", 
		"sudo su - Entra no ambiente root \n", 
		"sudo -h - Lista de ajuda para comandos \n", 
		"sudo update - Atualiza o sistema \n", 
		"sudo (programa) - Executa o programa como super usuario\n"
 ]

 const updating = [
		"Boa tentativa! Continue aprendendo."
 ]

 const cmds = {
	clear: {
		name: "clear",
		description: "Limpa o terminal",
		usage: "clear",
		fn: () => {
			term.current.clearStdout();
		},
	},

	sudo: {
		 name: "sudo",
		 description: "Permite executar comandos em modo de superusuário.",
		 usage: "sudo <argumentos>",
		 fn: (args) => {
				if (args == "update"){
					 return updating
					 
				}

				if (args == "-l"){
					 return sudoCommands.map((coms) => coms)
					 
				}
				
				return 'Argumento inválido'
		 },
	},

	ls: {
		 name: "ls",
		 description: "Lista arquivos no diretório atual",
		 usage: "ls",
		 fn: () => {
				if (dir[home].length === 0) {
					 return 'Nada aqui :(\nUse mkdir para criar uma pasta dentro desta.';
				} else {
					 return dir[home].join('\n');
				}
		 },
	},

	cd: {
		 name: "cd",
		 description: "Muda de diretório",
		 usage: "cd <directory>",
		 fn: (...args) => {
				if (args.length===1 && args[0]==='..') {
					 if (prompt === usrPrompt) {
							return "Não é mais possível ir um nível acima";
					 } else {
							setPrompt(
								 prompt.substring(0, prompt.lastIndexOf("/")) + ":~$ "
							);
							setHome(
								 prompt.substring(
										prompt.lastIndexOf("/", prompt.lastIndexOf("/") - 1)+1,
										prompt.lastIndexOf("/")
								 )
							);
							return;
					 }
				} else {
					 if (dir[home].includes(args[0])) {
							setPrompt(
								 `${prompt.slice(0, -4) + "/" + args.join('/') + ":~$ "}`
							);
							setHome(args.join("/"));
							return
					 } else {
							return "Não foi possível encontrar o diretório";
					 }
				}
		 },
	},

	mkdir: {
		 name: "mkdir",
		 description: "Cria um diretório",
		 usage: "mkdir <diretório>",
		 fn: (...args) => {
				if (args.length === 1) {
					 setDir({
							...dir,
							[home]: [...dir[home], args[0]],
							[args[0]]:[],
					 });

					 return
				} else {
					 return "Argumento inválido";
				}
		 },
	},

	help: {
		name: "help",
		description: "Lista todos os comandos disponíveis",
		usage: "help",
		fn: () => {
					 return ` 
					${Object.keys(cmds).map(cmd => `${cmd}${" "} (${cmds[cmd].usage}) - ${cmds[cmd].description}${" "}`).join('\n')}
			 ` 
		}
	},

	man: {
		name: "man",
		description: "Explica como utilizar um comando",
		usage: "man <comando>",
		fn: (args) => {
			 if (args == "ls"){
					return ( 
						 <div>
								<span><strong>NOME</strong></span>
								<p>&nbsp;&nbsp;&nbsp;&nbsp;ls - listar conteúdo do diretório</p>
								<span><strong>DESCRIÇÃO</strong></span>
								<p>&nbsp;&nbsp;&nbsp;&nbsp;Lista informações sobre os arquivos do diretório atual. </p>
						 </div>
					)
			 }
			 if (args == "mkdir"){
					return ( 
						 <div>
								<span><strong>NOME</strong></span>
								<p>&nbsp;&nbsp;&nbsp;&nbsp;mkdir - criar diretórios</p>
								<span><strong>DESCRIÇÃO</strong></span>
								<p>&nbsp;&nbsp;&nbsp;&nbsp;Cria diretórios, caso eles não existam.</p>
						 </div>
					)
			 }
			 if (args == "clear"){
					return ( 
						 <div>
								<span><strong>NOME</strong></span>
								<p>&nbsp;&nbsp;&nbsp;&nbsp;clear - limpa a tela do terminal</p>
								<span><strong>DESCRIÇÃO</strong></span>
								<p>&nbsp;&nbsp;&nbsp;&nbsp;Limpa a janela do terminal, incluindo os comandos anteriormente digitados na seção.</p>
						 </div>
					)
			 }
			 if (args == "sudo"){
					return ( 
						 <div>
								<span><strong>NOME</strong></span>
								<p>&nbsp;&nbsp;&nbsp;&nbsp;sudo - executa o comando como superusuário</p>
								<span><strong>DESCRIÇÃO</strong></span>
								<p>&nbsp;&nbsp;&nbsp;&nbsp; Permite executar comandos como superusuário, como é especificado pela política de segurança.</p>
						 </div>
					)
			 }
			 if (args == "cd"){
					return ( 
						 <div>
								<span><strong>NOME</strong></span>
								<p>&nbsp;&nbsp;&nbsp;&nbsp;cd - muda o diretório de trabalho</p>
								<span><strong>DESCRIÇÃO</strong></span>
								<p>&nbsp;&nbsp;&nbsp;&nbsp;O utilitário cd muda o diretório de trabalho do atual ambiente de execução.</p>
						 </div>
					)
			 }
			 if (args == "man"){
					return ( 
						 <div>
								<span><strong>NOME</strong></span>
								<p>&nbsp;&nbsp;&nbsp;&nbsp;man - uma interface para os manuais de referência do sistema</p>
								<span><strong>DESCRIÇÃO</strong></span>
								<p>&nbsp;&nbsp;&nbsp;&nbsp;É a página de manual do sistema. Cada argumento de página dado a man é, normalmente, o nome de um programa, utilitário ou função.</p>
						 </div>
					)
			 }
			if (args == "help"){
				return ( 
					 <div>
							<span><strong>NOME</strong></span>
							<p>&nbsp;&nbsp;&nbsp;&nbsp;help - comando criado para ajudar</p>
							<span><strong>DESCRIÇÃO</strong></span>
							<p>&nbsp;&nbsp;&nbsp;&nbsp;Este comando é próprio do simulador, não existindo execução dele unicamente em terminal ou prompt de comando.</p>
					 </div>
				)
		 	}
		},
 }

	// rmdir: {
	// 	 description: "",
	// 	 fn: (args) => {},
	// },

	// rm: {
	// 	 description: "",
	// 	 fn: (args) => {},
	// },
	// touch: {
	// 	 description: "",
	// 	 fn: (args) => {},
	// },
	
};

	return (
		<Terminal
         ref={term}
         commands = {{ ...cmds }}
         promptLabel={prompt}
         autoFocus
         errorText={
            "O comando '[command]' não foi encontrado! Use o comando 'help' para consultar a lista de comandos disponíveis. "
         }
         promptLabelStyle={styles.promptL}
         inputAreaStyle={styles.inputA}
         inputTextStyle={styles.inputText}
         messageStyle={styles.msgText}
         styleEchoBack={"fullInherit"}
         style={styles.default}
         noDefaults
				//  commandCallback={ res => handleOutput(res.command) }
      />
	)
}
