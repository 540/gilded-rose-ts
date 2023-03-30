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
  switch (item.name) {
    case 'Aged Brie':
      updateAgedBrieQuality(item)
      break;
    case 'Backstage passes to a TAFKAL80ETC concert':
      updateBackStageQuality(item)
      break;
    case 'Sulfuras, Hand of Ragnaros':
      updateSulfurasQuality(item)
      break;
    default:
      updateBasicItem(item)
      break;
  }

  if (item.name != 'Sulfuras, Hand of Ragnaros') {
    item.sellIn -= 1;
  }

}

const updateAgedBrieQuality = (item: Item) => {
  if (item.quality >= 50) {
    return
  }

  if (item.sellIn <= 0) {
    item.quality += 2
    return;
  }

  item.quality += 1
}

const updateBackStageQuality = (item: Item) => {
  if (item.quality >= 50) {
    return
  }

  if (item.sellIn <= 0) {
    item.quality = 0
    return;
  }

  if (item.sellIn <= 5) {
    item.quality += 3
    return;
  }

  if (item.sellIn <= 10) {
    item.quality += 2
    return;
  }

  item.quality += 1

}

const updateSulfurasQuality = (item: Item) => {
  //do nothing
}

const updateBasicItem = (item: Item) => {
  if (item.sellIn <= 0) {
    item.quality -= 2
  } else {
    item.quality -= 1
  }

  if (item.quality < 0) {
    item.quality = 0
  }

}
