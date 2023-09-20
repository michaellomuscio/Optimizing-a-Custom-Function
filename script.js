
const POP_SIZE = 100;
const MUTATION_RATE = 0.05;
const GENES = "0123456789.-";
let population = [];
let generation = 0;

function randomGene() {
    return GENES.charAt(Math.floor(Math.random() * GENES.length));
}


    function functionToOptimize(x) {
        const funcStr = document.getElementById("functionInput").value;
        return eval(funcStr);
    }
    

function initPopulation() {
    for (let i = 0; i < POP_SIZE; i++) {
        let randomString = "";
        for (let j = 0; j < 5; j++) {
            randomString += randomGene();
        }
        population.push(parseFloat(randomString).toFixed(5));
    }
}

function fitness(value) {
    return functionToOptimize(value);
}

function mutate(value) {
    let strValue = value.toString();
    let mutated = "";
    for (let char of strValue) {
        if (Math.random() < MUTATION_RATE) {
            mutated += randomGene();
        } else {
            mutated += char;
        }
    }
    return parseFloat(mutated).toFixed(5);
}

function crossover(parent1, parent2) {
    const midpoint = Math.floor(parent1.toString().length / 2);
    const childStr = parent1.toString().substring(0, midpoint) + parent2.toString().substring(midpoint);
    return parseFloat(childStr).toFixed(5);
}

function newGeneration() {
    const newPop = [];
    for (let i = 0; i < POP_SIZE; i++) {
        const parent1 = selectParent();
        const parent2 = selectParent();
        let child = crossover(parent1, parent2);
        child = mutate(child);
        newPop.push(child);
    }
    population = newPop;
    generation++;
}

function selectParent() {
    let maxFitness = Math.max(...population.map(fitness));
    let totalFitness = population.reduce((total, value) => total + fitness(value), 0);
    let random = Math.random() * totalFitness;
    for (let value of population) {
        if (random < fitness(value) / maxFitness) {
            return value;
        }
        random -= fitness(value) / maxFitness;
    }
    return population[0];
}

function startOptimization() {
    initPopulation();
    let maxGenerations = 1000;
    const interval = setInterval(() => {
        newGeneration();
        const best = population.sort((a, b) => fitness(b) - fitness(a))[0];
        document.getElementById("bestValue").textContent = best;
        document.getElementById("functionOutput").textContent = functionToOptimize(best).toFixed(5);
        document.getElementById("generation").textContent = generation;
        if (generation >= maxGenerations) {
            clearInterval(interval);
        }
    }, 100);
}
