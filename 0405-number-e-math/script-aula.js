

1. **`Math.abs()`:**
   Retorna o valor absoluto de um número, ou seja, o valor sem sinal.
   ```javascript
   const num = -5.5;
   const absNum = Math.abs(num); // absNum será 5.5
   ```

2. **`Math.ceil()`:**
   Arredonda um número para cima para o próximo número inteiro.
   ```javascript
   const num = 4.3;
   const ceilNum = Math.ceil(num); // ceilNum será 5
   ```

3. **`Math.floor()`:**
   Arredonda um número para baixo para o número inteiro mais próximo.
   ```javascript
   const num = 4.8334;
   const floorNum = Math.floor(num); // floorNum será 4
   ```

4. **`Math.round()`:**
   Arredonda um número para o número inteiro mais próximo.
   ```javascript
   const num = 4.8334;
   const roundNum = Math.round(num); // roundNum será 5
   ```

5. **`Math.max()`:**
   Retorna o maior número de uma lista de argumentos.
   ```javascript
   const maxNum = Math.max(5, 3, 10, 42, 2); // maxNum será 42
   ```

6. **`Math.min()`:**
   Retorna o menor número de uma lista de argumentos.
   ```javascript
   const minNum = Math.min(5, 3, 10, 42, 2); // minNum será 2
   ```

7. **`Math.random()`:**
   Retorna um número aleatório entre 0 (inclusive) e 1 (exclusivo).
   ```javascript
   const randomNum = Math.random(); // Exemplo: 0.82398234134
   ```

8. **Geração de um número aleatório dentro de um intervalo:**
   ```javascript
   const min = 32;
   const max = 72;
   const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min; // Exemplo: número entre 32 e 72
   ```

### Métodos de Number:

1. **`Number.isNaN()`:**
   Verifica se um valor é NaN (Not a Number).
   ```javascript
   Number.isNaN(NaN); // true
   Number.isNaN(4 + 5); // false
   ```

2. **`Number.isInteger()`:**
   Verifica se um número é um número inteiro.
   ```javascript
   Number.isInteger(20); // true
   Number.isInteger(23.6); // false
   ```

3. **`Number.parseFloat()`:**
   Analisa um argumento de string e retorna um número de ponto flutuante.
   ```javascript
   const floatValue = Number.parseFloat('99.50'); // floatValue será 99.5
   ```

4. **`Number.parseInt()`:**
   Analisa um argumento de string e retorna um inteiro na base especificada.
   ```javascript
   const intValue = Number.parseInt('99.50', 10); // intValue será 99
   ```

Esses exemplos demonstram como cada método e propriedade pode ser utilizado em JavaScript.