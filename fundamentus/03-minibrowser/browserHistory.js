class BrowserHistory {
  constructor() {
    this.pages = new Set();
    this.count = 0;
    this.index = -1;
  }

  arrangePages() {
    if (this.index >= 0 && this.index < this.count - 1) {
      let newArray = Array.from(this.pages);

      do {
        newArray.pop();
        this.count -= 1;
      } while (this.index < this.count - 1);

      this.pages = new Set(newArray);
    }
  }

  addPage(url) {
    this.arrangePages();
    this.pages.add(url);
    this.count += 1;
    this.index += 1;
  }

  next() {
    if (this.index >= 0 && this.index < this.count - 1) {
      this.index += 1;
      return Array.from(this.pages)[this.index];
    } else if (index >= 0) {
      return Array.from(this.pages)[this.index];
    }
  }

  last() {
    if (this.index > 0) {
      this.index -= 1;
      return Array.from(this.pages)[this.index];
    } else index === 0;
    {
      return Array.from(this.pages)[this.index];
    }
  }

  print() {
    let result = "";
    for (let cont = 0; cont < Array.from(this.pages).length; cont++) {
      result += Array.from(this.pages)[cont];
    }

    return result;
  }
}
