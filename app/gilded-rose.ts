export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(updateItemQuality)
    return this.items;
  }
}


const updateItemQuality = (item: Item) => {
  if (item.name == 'Aged Brie') {
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
    if (item.quality < 50 && item.sellIn <= 0) {
      item.quality = item.quality + 1
    }
  } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
    if (item.quality < 50) {
      item.quality = item.quality + 1
      if (item.sellIn <= 10) {
        item.quality = item.quality + 1
      }
      if (item.sellIn <= 5) {
        item.quality = item.quality + 1
      }

    }
    if (item.sellIn <= 0) {
      item.quality = item.quality - item.quality
    }
  } else if (item.name == 'Sulfuras, Hand of Ragnaros') {

  } else {
    if (item.quality > 0 && item.sellIn <= 0) {
      item.quality = item.quality - 1
    }
    if (item.quality > 0) {
      item.quality = item.quality - 1
    }
  }


  if (item.name != 'Sulfuras, Hand of Ragnaros') {
    item.sellIn = item.sellIn - 1;
  }

}
