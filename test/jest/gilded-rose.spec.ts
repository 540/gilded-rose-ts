import {Item, GildedRose} from '@/gilded-rose';

describe('Gilded Rose', () => {
  describe('Basic rules', () => {
    it('decreases quality by 1 when the sell by date has not passed', () => {
      const gildedRose = new GildedRose([new Item('foo', 1, 4)]);

      const item = gildedRose.updateQuality()[0];

      expect(item.sellIn).toBe(0);
      expect(item.quality).toBe(3);
    });

    it('updates quality by 2 once the sell by date has passed', () => {
      const gildedRose = new GildedRose([new Item('foo', 0, 4)]);

      const item = gildedRose.updateQuality()[0];

      expect(item.sellIn).toBe(-1);
      expect(item.quality).toBe(2);
    });

    it('quality does not go below 0', () => {
      const gildedRose = new GildedRose([new Item('foo', 0, 1)]);

      const item = gildedRose.updateQuality()[0];

      expect(item.sellIn).toBe(-1);
      expect(item.quality).toBe(0);
    });
  });

  describe('Aged Brie', () => {
    it('increases quality by 1 for Aged Brie when the sell by date has not passed', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 1, 2)]);

      const item = gildedRose.updateQuality()[0];

      expect(item.sellIn).toBe(0);
      expect(item.quality).toBe(3);
    });

    it('increases quality by 2 for Aged Brie once the sell by date has passed', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 0, 2)]);

      const item = gildedRose.updateQuality()[0];

      expect(item.sellIn).toBe(-1);
      expect(item.quality).toBe(4);
    });

    it('quality does not go above 50', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 1, 50)]);

      const item = gildedRose.updateQuality()[0];

      expect(item.sellIn).toBe(0);
      expect(item.quality).toBe(50);
    });
  });

  describe('Sulfuras', () => {
    it('does not modify quality or sellin', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 2)]);

      const item = gildedRose.updateQuality()[0];

      expect(item.sellIn).toBe(5);
      expect(item.quality).toBe(2);
    });
  });

  describe('Backstage', () => {
    it('increases quality by 1 for Backstage when the are more than 10 days until the sell by date', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 2)]);

      const item = gildedRose.updateQuality()[0];

      expect(item.sellIn).toBe(10);
      expect(item.quality).toBe(3);
    });

    it('increases quality by 2 for Backstage when there between 10 and 6 days until the sell by date', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 2)]);

      const item = gildedRose.updateQuality()[0];

      expect(item.sellIn).toBe(9);
      expect(item.quality).toBe(4);
    });

    it('increases quality by 3 for Backstage when there are 5 days or less until the sell by date', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 2)]);

      const item = gildedRose.updateQuality()[0];

      expect(item.sellIn).toBe(4);
      expect(item.quality).toBe(5);
    });
  });
});
