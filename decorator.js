const Decorator = function(name){
    this.name = name
    this.stock = []
}

Decorator.prototype.addToStock = function(paint){
    this.stock.push(paint);
}

Decorator.prototype.stockLength = function(){
    return this.stock.length
}

Decorator.prototype.calculateTotalLitres = function(){
    total = 0;
    for (let i = 0 ; i < this.stock.length; i++){
        total += this.stock[i].litres
    }
    return total;
}
module.exports = Decorator