import { useEffect } from "react";
import { handleHead } from "../../utils/handleHead.js";
import "./dicas.css";
export default function Dicas(){
    useEffect(() => {
        handleHead('/calculator-icon-5.png', 'Dicas');
    }, []);
    return (
        <section>
            <h1>Dicas Matemáticas</h1>
            <div className="border-3 border-(--color-grey1)">
                <div className="bg-(--color-grey1) py-3 h-4 relative">
                    <span className="after:absolute after:content-[''] after:block after:h-1 after:w-full after:bg-(--color-blue) after:-bottom-4" />
                </div>
                <hr className="taghr opacity-0!" />
                <div className="overflow-x-scroll scrollbar-none max-h-150">
                    <p>
                        Para saber a porcentagem de algum valor, por exemplo, 20 por cento de 200, faça 20 vezes 0.2 (que é 20%), resultado 40, ou seja, 40 é 20% de 200.
                        <br/><br />
                        0.2 é um quinto, então também pode fazer 200 vezes (1/5). Não precisa de parênteses. <br/>
                        Às vezes é melhor usar fração, por exemplo, um terço é 33.333...%, com dízima periódica infinita, em decimal é 0.333..., mas (1/3) é exato (e alcança limites infinitesimais), por exemplo, 60 * 0.33333 = 19.9998, mas 60 * (1/3) = 20. Se quiser apenas 33%, use 0.33, isso não é exatamente 1 terço. Se quiser apenas 33.3%, use 0.333, e assim por diante.
                    </p>
                    <hr className="taghr" />
                    <p>
                        Outro caso de porcentagem: 90 é 30% de quanto? Faça 90 dividido por 0.3 (que é 30%), resultado 300, então 90 é 30% de 300, e 300 é 100% desse caso.
                    </p>
                    <hr className="taghr" />
                    <p>
                        Mais um caso: 90 corresponde a quantos por cento dentro de 360? Faça 90 dividido por 360, o resultado é 0.25, depois multiplique 0.25 por 100, porque é porcentagem, portanto, 90 é 25% de 360. 25% é 1/4, 90 é 4 vezes menor que 360. <br/>
                        Isso também vale para o oposto: 360 corresponde a quantos por cento sobre 90? Faça 360 dividido por 90, o resultado é 4, depois multiplique 4 por 100, portanto, 360 é 400% de 90 (360 é 4 vezes maior que 90). <br/>
                        90 vezes 4 é 360. E 360 dividido por 4 é 90.
                    </p>
                    <hr className="taghr" />
                    <p>
                        Para saber o desconto de algo: se for "algo é 120 com 20% de desconto", não mostra o valor incial sem o desconto, para saber, faça 1 menos 0.2, o resultado é 0.8 (80%), 1 é a representação do valor inicial que recebeu desconto e 0.2 é o desconto de 20%, então faça 120 dividido por 0.8, o resultado é 150, isso é o valor incial e 120 é 80% do valor inicial. O desconto foi 30, que é 20% do inicial.
                        <br/><br />
                        Se for "algo diminuiu de 150 para 120", não mostra a porcentagem que descontou, faça 120 dividido por 150, o resultado é 0.8, isso quer dizer que 120 é 80% de 150, então descontou 0.2 (20%), que é 30. 0.8 menos 1 é -0.2, isso é 20% negativo, é o que descontou.
                        <br/><br />
                        Se for "algo é 150 e vai descontar 20%", não mostra o valor final com o desconto, faça 150 vezes 0.2 para saber quanto é 20% de 150, o resultado é 30, então o desconto é 150 menos 30, o valor final é 120.
                        <br/><br />
                        Para saber o aumento de algo: se for "algo é 150 e vai aumentar 20%", não mostra o valor final com o aumento, pode fazer a mesma conta anterior (150 vezes 0.2) e depois somar 150 com 30, porque é aumento, o valor final é 180. Outra forma é fazer semelhante à primeira conta do desconto de 20%, nesse caso é aumento, é 1 mais 0.2, isso é 1.2, o aumento de 20%, 150 mais 20%, então faça 150 vezes 1.2, o resultado é 180.
                        <br/><br />
                        Se for "algo é 180 com 20% de aumento", não mostra o valor inicial sem o aumento, precisa do aumento, ou seja, 1 mais 0.2, então faça 180 dividido por 1.2 (semelhante à primeira conta), o resultado é 150, quer dizer que 150 é o valor inicial que aumentou 20% e foi para 180, aumentou 30, que é 20% do inicial.
                        <br/><br />
                        Se for "algo aumentou de 150 para 180", não mostra a porcentagem que aumentou, faça 180 dividido por 150, o resultado é 1.2, ou seja, aumentou 20%, no caso, 30. 1.2 menos 1 é 0.2, isso é 20% positivo, é o que aumentou.
                        <br/><br />
                        Quando tem os dois valores, por exemplo, de 150 para 180, também pode fazer (180 - 150) / 150, resultado 0.2. A mesma coisa de 150 para 120, faça (120 - 150) / 150, resultado -0.2. Perceba: é o valor final - o valor inicial e depois divide pelo valor inicial. Os parênteses servem para a calculadora seguir essa ordem.
                    </p>
                    <hr className="taghr" />
                    <p>
                        Uma dica importante sobre porcentagem: perceba que 10 por cento (10/100) é 0.1 (1 décimo), isso é apenas a estrutura básica da porcentagem. A porcentagem é um elemento relativo, ou seja, não tem valor por si, só tem relevância se estiver relacionado, relativo a algum valor absoluto, valor de fato, concreto. Um professor de matemática ensinou que devemos fazer uma pergunta quando alguém fala "tal coisa é tantos por cento", a pergunta é "de quê?", mas os jornalistas geralmente só falam "tal coisa é tantos por cento", além de exagero e sensacionalismo enviesado para confundir o entendimento das pessoas, e também podemos questionar a capacidade matemática de muitos jornalistas, portanto, se alguém falar "tal coisa mudou tantos por cento", você pergunta "mudou tantos por cento de quê, de quanto, qual o valor inicial e qual o valor final?"; tome cuidado com jornalistas e pessoas que não mostram fatores importantes.
                    </p>
                    <hr className="taghr" />
                    <p>
                        Para potenciação, faça 2^2, resultado 4 <br/>
                        A potência de potência é (5^3)^0 (na calculadora) (5<sup>3</sup>)<sup>0</sup> (no papel), resultado 1 <br/>
                        É diferente de 5^3^0 (na calculadora) 5<sup>3<sup>0</sup></sup> (no papel), resultado 5, essa conta é torre de potências ou potência por expoente <br/>
                        E 5^(3^0) (na calculadora) 5<sup>(3<sup>0</sup>)</sup> (no papel) também é 5 e também é torre de potência ou potência com expoente de potência
                        <br/><br />
                        Para radiciação, faça 25^(1/2) ou 25^(0.5) (na calculadora) 25<sup>1/2</sup> ou 25<sup>&frac12;</sup> ou 25<sup>0.5</sup> (no papel), isso é a raiz quadrada de 25, resultado 5. Tem que usar parênteses senão o resultado será diferente. Com fração no expoente, é radiciação, então precisa de parênteses. <br/>
                        Também pode fazer 4^(3/2), resultado 8. O denominador é o índice da raiz e o numerador é a potência da base. A solução é: raiz quadrada de 4 é 2 e depois 2 elevado a 3 é 8. Ou o contrário: 4 elevado a 3 é 64 e raiz quadrada de 64 é 8.
                        {/* ( 25<sup>1<sub>/2</sub></sup> | 25<sup>1<sub>/<sub>2</sub></sub></sup> | 25<sup>1/<sub>2</sub></sup> ) */}
                    </p>
                    <hr className="taghr" />
                    <p>
                        Use ponto para números decimais (9.5), não use vírgula (9,5) <br />
                        Ao digitar mil (e outros milhares, milhões, etc), digite 1000 sem ponto e sem vírgula, não digite 1.000 nem 1,000
                        <br/><br />
                        Se a página atualizar por algum motivo ou você atualizar, mesmo sem querer, o que você digitou no visor será perdido, mas o que foi salvo continua salvo no histórico.
                        <br/><br />
                        O botão Calcular faz a conta e salva no histórico, também pode apertar Enter. <br />
                        Se quiser apenas salvar alguma coisa, um número ou informação, use o botão Salvar, também pode apertar Ctrl + Enter (segure Ctrl e aperte Enter).
                        <br/><br />
                        A página com as Dicas abre em outra aba para você ficar com as duas abas abertas e poder consultar as dicas durante as contas.
                        <br/><br />
                        Se você estiver no celular, só poderá usar o teclado da calculadora ou um teclado externo, porque o teclado do celular não vai aparecer para essa calculadora.
                    </p>
                    <hr className="taghr" />
                    <p className="text-center">
                        Se você adivinhar qual é o contexto da conta na imagem abaixo, você é gênio!
                    </p>
                    {/* <hr className="taghr" /> */}
                    <img
                        className="my-0 mx-auto block"
                        src="/tela_da_calculadora_em_uso.png"
                        alt="Imagem de uma conta na calculadora para você adivinhar o contexto"
                    />
                    <hr className="taghr"/>
                </div>
                <hr className="taghr opacity-0!"/>
                <div className="bg-(--color-grey1) py-3 h-4 relative">
                    <span className="before:absolute before:content-[''] before:block before:h-1 before:w-full before:bg-(--color-blue) before:-top-4"/>
                </div>
            </div>
        </section>
    );
};
