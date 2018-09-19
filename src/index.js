class Sorter {
  constructor() {
   this.arr = []; 
   this.newarr =[];
   this.compareFunction = function(a,b){return a - b};
  }
  
  add(element) {
    return this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
    // your implementation
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    
    indices.sort(function(a,b){return a - b});
    this.newarr = this.arr.slice(indices[0],indices[0]+1).concat(this.arr.slice(indices[1],indices[1]+1),this.arr.slice(indices[2],indices[2]+1));
    this.newarr.sort(this.compareFunction);
    for (var i = 0; i<indices.length; i++){
    this.arr[indices[i]] = this.newarr[i];
    }
  
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;