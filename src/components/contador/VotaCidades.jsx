import { useState } from "react"

const VotaCidades = () => {

    const [qxd, setQxd] = useState(0)
    const [crat, setCrat] = useState(0)
    const [lim, setLim] = useState(0)
    const [ganhador,setGanhador] = useState()
    const votosqxd = () => {
        setQxd(qxd + 1)

    }

    function exibirGanhador(ganhador) {

        alert(ganhador)
        console.log('aqui'+ganhador)
        setGanhador(ganhador)

    }

    const calcular = () => {
        if ((qxd > crat) && (qxd > lim)) {
            exibirGanhador("Quixada")
            return console.log(ganhador)
        }
        else if ((crat > qxd) && (crat > lim)) {

            exibirGanhador("crateus")
        }
        else if ((lim > qxd) && (lim > crat)) {

            exibirGanhador("Limoeiro do norte ")

        } else if ((lim === qxd) && (lim === crat)) {

            exibirGanhador("Empate ")

        }

    }

    
    
    const votoscrateus = () => {
        setCrat(crat + 1)

    }
    const votoslimoeiro = () => {
        setLim(lim + 1)

    }
    return (
        <div>
            <div>
                <h2>Quixadá: {qxd} </h2>
                <h2>Limoeiro do Norte: {lim} </h2>
                <h2>Crateús: {crat} </h2>
                <h2>Resultado {ganhador}  </h2>

            </div>
            <div>
                <button onClick={votosqxd}>Votar Quixadá  </button>
                <button onClick={votoslimoeiro}>Votar Limoeiro do Norte</button>
                <button onClick={votoscrateus}>Votar Crateús</button>
                <button onClick={calcular}>Calcular</button>
            </div>
        </div>

    )

}

export default VotaCidades