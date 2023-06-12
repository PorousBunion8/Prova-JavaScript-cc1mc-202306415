//1 - Crie uma função que receba um número como parâmetro e determine se ele é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.

function determinarPrimo(number) {
    if (number <= 1) {
      
      return false;
    }
  
    const limit = Math.floor(Math.sqrt(number));
  
    for (let i = 2; i <= limit; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  const userInput = prompt("Digite um número: ");
  const number = parseInt(userInput);
  
  if (isNaN(number)) {
    alert("Entrada inválida! Por favor, digite um número válido.");
  } else {
    if (determinarPrimo(number)) {
      console.log(number + " é um número primo.");
    } else {
      console.log(number + " não é um número primo.");
    }
  }
  
  
  const primes = [];
  
  for (let i = 1; i <= 1000; i++) {
    if (determinarPrimo(i)) {
      primes.push(i);
    }
  }
  
  console.log(primes);
  
 //2 - Crie uma função que receba uma senha como parâmetro e verifique se ela atende aos seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Sua função deve receber uma senha e dizer para o usuário se ela é valida.

 function criarSenha(senha) {
    if (senha.length < 8) {
      return "A senha deve possuir pelo menos 8 caracteres.";
    }
  
    if (!/[A-Z]/.test(senha)) {
      return "A senha deve possuir pelo menos uma letra maiúscula.";
    }
  
    if (!/[a-z]/.test(senha)) {
      return "A senha deve possuir pelo menos uma letra minúscula.";
    }
  
    if (!/[0-9]/.test(senha)) {
      return "A senha deve possuir pelo menos um número.";
    }
  
    return "senha validada e  criada com sucesso.";
  }
  
  const userInput = prompt("Digite uma senha: ");
  const senha = userInput.trim();
  
  console.log(criarSenha(senha));
  
//3 - Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.  
 
function calcularFatorialRecursivamente (n) {
    if (n === 1) {
        return 1;
    }
     
    return n * calcularFatorialRecursivamente (n - 1);
}
 
function calcularFatorial (fatorial) {
    if (isNaN(fatorial)) {
        return 'Não existe fatorial de um texto';
    }
     
    if (!Number.isInteger(fatorial) || fatorial < 0) {
        return 'Não existe fatorial de um número não natural';
    }
     
    if (fatorial === 0 || fatorial === 1) {
        return 1;
    }
     
    return calcularFatorialRecursivamente(fatorial);
    
    
}
const userInput = prompt("Digite um número: ");
  const number = parseInt(userInput);
 
console.log(calcularFatorialRecursivamente(number));

//4 - Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.



function QuadradoPerfeito(num) {
    const raiz = Math.sqrt(num);
    if (Number.isInteger(raiz)) {
      return true;
    } else {
      return false;
    }
  }
  
  const userInput = prompt("Digite um número: ");
  const number = parseInt(userInput);
  console.log(QuadradoPerfeito(number));
  
    
    
    
  