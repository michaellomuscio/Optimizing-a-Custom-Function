
# Genetic Algorithm for Optimizing a Custom Function

## Overview
[This example](https://michaellomuscio.github.io/Optimizing-a-Custom-Function/) uses a genetic algorithm to optimize a custom function within a specified range.

## Resources to learn more
[Here](https://docs.google.com/document/d/1_lzpuUzTSAosdZqfeqtqmqSjo8RCp2LCSfn47HPbAG8/edit?usp=sharing) is a brief introduction to genetic algorithms.

## How to Use
- Open `index.html` in a web browser.
- Input your custom function and range.
- Click "Start Optimization" to see the genetic algorithm in action.

## Mechanism
The genetic algorithm optimizes the function using:
- **Selection**: Solutions with better function values have a higher chance of being selected.
- **Crossover**: Combines two solutions to produce a new solution.
- **Mutation**: There's a small chance of a random change in a solution to introduce variability.

## Entering Functions:

When using the "Optimizing a Custom Function" example, you'll be prompted to enter a custom function. The function should be written in JavaScript syntax, and you can use any valid JavaScript mathematical operations and functions. Here's how to correctly input your function:

1. **Variables**: Use `x` as the variable for your function.
   
2. **Operations**:  
   - Addition: `+`
   - Subtraction: `-`
   - Multiplication: `*`
   - Division: `/`
   - Exponentiation: `**`

3. **Mathematical Functions**: You can use any of the built-in JavaScript Math functions. Here are some examples:
   - Sine: `Math.sin(x)`
   - Cosine: `Math.cos(x)`
   - Tangent: `Math.tan(x)`
   - Exponential: `Math.exp(x)`
   - Natural Logarithm: `Math.log(x)`
   - Square Root: `Math.sqrt(x)`

4. **Constants**: You can use numbers directly, e.g., `3.14` for \(\pi\) (or use `Math.PI` for a more accurate value).

### Function Examples:

Here are some example functions you can input:

1. Quadratic function: `x**2 + 2*x + 1`
2. Sine wave: `Math.sin(x)`
3. Exponential decay: `Math.exp(-x)`
4. Custom: `Math.sin(x) * x**2 + 3*x - Math.exp(x)`

### Note:

Ensure your function is valid and doesn't contain any typos or errors. The application will attempt to optimize whatever function you provide based on the range you specify.
