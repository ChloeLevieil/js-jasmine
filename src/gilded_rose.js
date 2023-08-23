class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      if (item.name === 'Aged Brie') {
        this.updateAgedBrie(item);
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.updateBackstagePass(item);
      } else if (item.name === 'Sulfuras, Hand of Ragnaros') {
        // Rien ne change pour la qualité et les ventes de Sulfura
      } else {
        this.updateRegularItem(item);
      }
    }

    return this.items;
  }

  updateAgedBrie(item) {
    if (item.quality < 50) {
      item.quality += 1;
    }

    item.sellIn -= 1;

    if (item.sellIn < 0 && item.quality < 50) {
      item.quality += 1;
    }
  }

  updateBackstagePass(item) {
    if (item.quality < 50) {
      item.quality += 1;
      if (item.sellIn < 11) {
        if (item.quality < 50) {
          item.quality += 1;
        }
      }
      if (item.sellIn < 6) {
        if (item.quality < 50) {
          item.quality += 1;
        }
      }
    }

    item.sellIn -= 1;

    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  updateRegularItem(item) {
    if (item.quality > 0) {
      item.quality -= 1;
      if (item.sellIn < 0 && item.quality > 0) {
        item.quality -= 1;
      }
    }

    item.sellIn -= 1;
  }
}

module.exports = {
  Item,
  Shop
}
