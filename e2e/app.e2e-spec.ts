import { Nut3Page } from './app.po';

describe('nut3 App', () => {
  let page: Nut3Page;

  beforeEach(() => {
    page = new Nut3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
