function DeQueue() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

function Node(data) {
  this.data = data;
  this.prev = null;
  this.next = null;
}

DeQueue.prototype.pushBack = function (data) {
  let node = new Node(data);

  node.prev = null;
  node.next = this.head;

  if (this.head) {
    this.head.prev = node;
    this.head = node;
    this.size++;
  } else {
    this.head = node;
    this.tail = node;
    this.size++;
  }
};

DeQueue.prototype.pushFront = function (data) {
  let node = new Node(data);

  node.prev = this.tail;
  node.next = null;

  if (this.tail) {
    this.tail.next = node;
    this.tail = node;
    this.size++;
  } else {
    this.head = node;
    this.tail = node;
    this.size++;
  }
};

DeQueue.prototype.popBack = function () {
  if (this.head !== null) {
    let temp = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.size--;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      this.size--;
    }

    return temp.data;
  }

  return `It is empty`;
};

DeQueue.prototype.popFront = function () {
  if (this.tail !== null) {
    let temp = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.size--;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.size--;
    }

    return temp.data;
  } else {
    return `It is empty`;
  }
};

DeQueue.prototype.isEmpty = function () {
  return this.size === 0;
};

DeQueue.prototype.peekBack = function () {
  if (this.head == null) {
    return `it is emtpy`;
  }

  return this.head.data;
};

DeQueue.prototype.peekFront = function () {
  if (this.tail == null) {
    return `it is emtpy`;
  }

  return this.tail.data;
};

let array = [9, 8, 7, 6, 5, 1, 2, 3, 4];
let myCoins = 0;

function coins(array) {
  let deq = new DeQueue();

  array.sort().map(item => deq.pushFront(item));

  if (array.length % 3 !== 0) {
    return `can't do it`;
  } else {
    while (!deq.isEmpty()) {
      deq.popFront();
      myCoins += deq.popFront();
      deq.popBack();
    }
  }

  return myCoins;
}

console.log(`Наша наибольшая сумма: ${coins(array)}`);
