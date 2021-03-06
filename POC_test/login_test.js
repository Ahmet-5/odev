Feature('login');

Scenario('giris', ({ I }) => {

    //elementleri seçerken öncelikle id-name kullanmaya çalıştım. 
    I.amOnPage('http://gittigidiyor.com');
    I.seeElement("//*[contains(text(),'Sizin için Seçtiklerimiz')]");//sayfanın açıldığı kontrol ediliyor.
    I.waitForElement('//div[@class="gekhq4-3 icMLoL"]');//sonraki işlemler için Iwaitfor kullanıyorum işlemler beklenirken test fail olmasın diye.
    I.click('//div[@class="gekhq4-3 icMLoL"]');
//login alanları doldururluyor.
    I.waitForElement('//input[@id="L-UserNameField"]','huseyinumut1997@gmail.com');
    I.fillField('//input[@id="L-UserNameField"]','huseyinumut1997@gmail.com');
    I.fillField('//input[@id="L-PasswordField"]','test.123');
    I.click('//input[@id="gg-login-enter"]');//sayfaya giriş yapılıyor.
    I.waitForElement("//*[contains(text(),'Haftanın Keşifleri')]");
    I.seeElement("//*[contains(text(),'Haftanın Keşifleri')]");//giriş başarılı mı diye kontrol ediliyor.
    I.fillField('//input[@name="k"]', 'bilgisayar');//arama kısmına bilgisayar yazılıyor.
    I.click('//button[@class="qjixn8-0 sc-1bydi5r-0 hKfdXF"]');//arama butonuna basılıyor.
    I.waitForElement('//div[@class="pager pt30 hidden-m gg-d-24"]//li[@class="selected"]//a[@href="/arama/?k=bilgisayar&sf=2"]');
    I.click('//div[@class="pager pt30 hidden-m gg-d-24"]//li[@class="selected"]//a[@href="/arama/?k=bilgisayar&sf=2"]');//2. sayfa açılıyor.(kontrol etme işlemini nasıl yapacağımı bilemedim sayfa içerisinde sayfaya özgün bir şey bulamadım page 2 haricinde.)
    I.waitForElement('//div[@id="item-info-block-666958704"]');
    I.click('//div[@id="item-info-block-666958704"]');//rastgele ürün seçiliyor.
    I.waitForElement('//div[@id="sp-addbasket-button"]');
    I.click('//div[@id="sp-addbasket-button"]');//ürün sepete ekleniyor.
    //ürün sayfasındaki fiyat ile spetteki fiyat kıyasını nasıl yapacağımı bilemiyorum, bulamadım.
    I.click('//div[@title="Sepet"]');//sepet açılıyor.
    I.click('//div[@class="gg-w-3 gg-d-3 gg-t-4 gg-m-16 pull-right-m hidden-m padding-none"]');
    I.click('//div[@class="gg-input gg-input-select "//select[@data-value="2"]');//ürün sayısı arttırılıyor.2 yapılıyor.
    I.click('//div[@class="gg-d-24 hidden-m update-buttons-container"]//a[@title="Sil"]');//sepet boşaltılıyor.
    I.seeElement('//*[contains(text(),"Sepetinizde ürün bulunmamaktadır.")]')//sepetin boş olduğu kontrol ediliyor.


});
