const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
let genesNew = [genes[0], genes[1], genes[4]]
genesNew.push(genes[2])
genesNew.push(genes[3])
genesNew.push(genes[3])
genesNew.unshift("FXT")
console.log(genesNew)
