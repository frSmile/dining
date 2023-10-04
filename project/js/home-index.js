/*
    SMILEDINING-SA17-0001                       07/29/2017          FixBug              1. User can click check out last time.
    SMILEDINING-SA17-0026                       08/29/2017          Customize           1. Add new function Auto Charge.
    SMILEDINING-SA17-0028                       09/17/2017          Customize           1. Add new function Holiday.
    SMILEDINING-SA17-0029                       11/13/2017          Customize           1. Add new function Shop Close.
    SMILEDINING-SA17-0030                       11/16/2017          Customize           1. When shop close resend email to support.
    SMILEDINING-SA18-0006                       01/19/2018          Customize           1. Check discount code expired , Show foodset menu hours , Add discount type
    SMILEDINING-SA18-0008                       02/09/2018          FixBug              1. Resend order change flag. 
    SMILEDINING-SA18-0005                       01/18/2018          Customize           1. New Order History.
    SMILEDINING-SA18-0018                       06/19/2018          FixBug              1. Fixbug Css for App. 
    SMILEDINING-SA18-0017                       06/15/2018          FixBug              1. Fixbug FoodCategory Scroll
    SMILEDINING-SA18-0019                       07/02/2018          Customize           1. Customize footer-nav layout
    SMILEDINING-SA18-0025                       09/03/2018          FixBug              1. Fixbug customer not save new and edit address can click next
                                                                                        2. Fixbug Delivery mile over 1,000 mile Validate Mapzonemile error
                                                                                        3. Change message error Delivery address don't save
    SMILEDINING-SA18-0036                       11/15/2018          Customize           1. Add button Delete Logo Shop in smiledining
                                                                                        2. smiledining mobile device nameshop to longer
                                                                                        3. modal Autocharge after edit can't scroll in modal
                                                                                        4. edit function GetDataOrderHistory in smiledining to new concept
                                                                                        5. add new theme color (Red, Yellow, Navy, Gold, Beige, Pink, Black)
    SMILEDINING-SA18-0045                       12/24/2018          Customize           1. Fixbug smiledining tablet device shop name longer menu Login have multiple line
                                                                                        2. Fixbug smiledining mobile device scroll top after click Login and Register
                                                                                        3. add function check shipping-type to show delivery and pickup (0 = showPickUp, 1=showDelivery, 2=showAll)
                                                                                        4. change GetAll to get data with parameter Owner
                                                                                        5. Refresh in owner add choose menu liveOrder
                                                                                        6. Check and Remove div not using
                                                                                        7. Edit function RemoveRange public to private (Service)
                                                                                        8. Fixbug add maxlength tipDesc
                                                                                        9. Fixbug linkToFood after click linkToFood modal choiceSetup can not reset
     SMILEDINING-SA19-0004                      03/13/2019          Customize           1. Add new tab menu 'Announcement' to 'Menu Setting' of SmileOwner
                                                                                        2. Move 'Broad Text' of Menu Setting to 'Announcement'
                                                                                        3. Create ''Announcement' module that include Header, Description, Badge.
                                                                                        4. Add 'broad-active'  status for enable/disable on SmileDining (1=enable, 0=disable)
                                                                                        5. Announcement must collaborative with active and close time of setup on SmileOwner.
                                                                                        6. Upload/Delete AnnounceImage
                                                                                        7. Delete Shop Logo
    SMILEDINING-SA19-0005                       03/25/2019          Customize           1. Gennerate sql script for create table 'tbdeliveryfreetime'
                                                                                        2. Add Delivery Free Time UI for Draw Maps and Set Mile at MySetting menu
                                                                                        3. Delivery Free Time can separate date between Zone1, Zone2 and Zone3
                                                                                        4. Control delivery charge of SmileDining depending on Shop map code and Zone of delivery
    SMILEDINING-SA19-0008                       04/19/2019          Customize           1. Create Table tbcoupondelivery.
                                                                                        2. Create UI on My Setting menu at WebOwner.
                                                                                        3. Assign total usable coupon option.
                                                                                        4. Assign minimum order option.
                                                                                        5. Assign discount delivery charge option.
                                                                                        6. Assign start and end date for available coupon.
                                                                                        7. Check and Calculate delivery charge and tax when order food.
    SMILEDINING-SA19-0014                       06/25/2019          Customize           1. Create saving option for 'Billing Address'
    SMILEDINING-SA20-0003                       24/02/2020          Customize           1. New feature Limit Order and fix Bug food set time.
    SMILEDINING-SA20-0004                       13/05/2020          Customize           1. New feature Guest On Smile Dining and Delivery Address and Config Menu Hour.
    SMILEDINING-SA20-0006                       15/07/2020          Customize           1. Change Tip Guide in Smile Dining From Web Owner.
    SMILEDINING-SA20-0013                       29/07/2020          Customize           1. New feature ASAP Only.
    SMILEDINING-SA20-0020                       09/09/2020          Customize           1. Fix bug Order in advance when Set Shop Close StartDate and EndDate.
                                                                                        2. Fix bug Change shipmentType Auto.
    SMILECONTACTLESS-SA20-0001                  06/10/2020          New Project         1. New project smile contactless integrate smile dining, web owner, web api
    SMILEDINING-SA20-0011                       23/07/2020          Customize           1. New feature auto apply discount SmileDining.
    SMILEDINING-SA20-0016                       21/10/2020          Customize           1. Promotion free food.
    SMILEDINING-SA20-0028                       21/10/2020          Customize           1.Upload/show Image Announcement(Lightbox)
                                                                                        2.Add GlobalConfig image-annonce/image-announce-size/image-announce-active
    SMILEDINING-SA20-0034#2                     17/11/2020          Customize           1. Fix bug select calendar day of week equal today invalid show time.
    SMILEDINING-SA20-0038                       27/11/2020          Customize           1. Custom time menu.
    SMILEDINING-SA20-0038#1                     30/11/2020          Customize           1. Fix bug custom time menu invalid foodsettime.
    SMILEDINING-SA20-0040                       01/12/2020          Customize           1. Fix bug cannot close dialog shopclose.
                                                                                        2. Guest login don't show message save success. 
    SMILEDINING-SA20-0038#2                     16/12/2020          FixBug              1. Fix bug close shop-status;
    SMILEDINING-SA20-0045                       17/12/2020          FixBug              1. Fix bug Smile Dining is unable to postpone the Food Set to the last Food Set.
    SMILEDINING-SA20-0043                       15/12/2020          Customize           1. Custom map zone mile price.
    SMILEDINING-SA20-0031                       02/12/2020          Customize           1. Adjust shop close period date and time.
    SMILEDINING-SA20-0031#2         			29/12/2020      	Customize           1. Fix bug set pickup/delivery button.
    SMILEDINING-SA20-0031#5                     11/01/2021          Customize           1. Fix bug shopping cart invalid when custom shop close time.
    SMILEDINING-SA21-0007                       02/02/2021          Customize           1. Apple Pay and Set up Unit Of Work  and Shop Close API
    SMILEDINING-SA21-0011                       22/02/2021          Customize           1. Change alert message, alert icon and refresh web in Smile dining when find error.
                                                                                        2. Fix bug Delivery charge in payment when delivery charge = 0 .
    SMILEDINING-SA21-0006                       12/02/2021          Customize           1. Add eGift card to SmileDining.
    SMILEDINING-SA21-0015                       09/03/2021          Customize           1. Fix bug validate setting promotion price.
                                                                                        2. Fix bug smileDining disable button add to cart when invalid time.
                                                                                        3. Fix bug mask input phone number don't working in mobile.
                                                                                        4. Fix bug button pickup/delivery invalid color in mobile.
                                                                                        5. Fix bug selectBox in Config setup Choice Option and Choice Modify don't close when scroll window after open selectBox.
                                                                                        6. Fix bug scroll window when open or close modal.
                                                                                        7. Edit globalconfigservice.cs and globalconfigcontactlessservice.cs save value.
                                                                                        8. Edit view of setupGiftCard webOwner and Fix bug of giftcard. 
    SMILEDINING-SA21-0021                       11/06/2021          Customize           1. Setting icon image for show in smileDining.
    SMILEDINING-SA21-0026#2                     20/07/2021          Customize           1. Fixed bug delete facebook account.
    SMILEDINING-SA21-0052                       09/08/2021          Customize           1. Add button 'No Asap' in web support and Edit 'Today Only'
    SMILEDINING-SA21-0064                       12/10/2021          Customize           1. Send Confirmation account mail.
    SMILEDINING-SA21-0067                       29/10/2021          Customize           1. Alert error message when call ajax fail in smileDining.
    SMILEDINING-SA21-0067#1                     01/11/2021          Customize           1. Fix bug alert error message when call ajax fail in smileDining.
    SMILEDINING-SA21-0066#3                     01/11/2021          Customize           1. Fix bug when channel is busy mode.
    SMILEDINING-SA21-0069                       03/11/2021          Customize           1. Add block emoji in text field and input field.
    SMILEDINING-SA21-0027#2                     05/11/2021          Customize           1. Fix bug UI Layout P1.
    SMILEDINING-SA21-0027#3                     08/11/2021          Customize           1. Fix bug UI Layout P1 scroll food category.
    SMILEDINING-SA21-0074                       17/11/2021          Customize           1. Fix log in gust phone number wrong format.
    SMILEDINING-SA21-0079                       25/11/2021          Customize           1. Fix bug session null when confirm payment.
    SMILEDINING-SA21-0080#2                     09/12/2021          Customize           1. Calculate marketingFee in SmileDining and show receipt and report in webSupport.
    SMILEDINING-SA21-0027#5                     27/12/2021          Customize           1. Fix bug UI Layout P1 and Layout P2 icon food on WebSmileDining.
    SMILEDINING-SA21-0027#6                     27/12/2021          Customize           1. Fix bug icon food when click edit food on WebSmileDining.
    SMILEDINING-SA21-0027#7                     13/01/2022          Customize           1. Fix bug icon food when click more icon in WebSmileDining.
    SMILEDINING-SA22-0001                       25/01/2022          Customize           1. Call API and loading shimmer in smiledining.
    SMILEDINING-SA22-0001#5                     29/01/2022          Customize           1. Fix bug shimmer, customeraddressbilling, promotion.
    SMILEDINING-SA22-0001#6                     02/02/2022          Customize           1. Fix bug add new delivery address.
                                                                                        2. Fix bug save order choice to database.
                                                                                        3. Fix bug send giftcode to POS.
                                                                                        4. Add log statuscode localforyou.
                                                                                        5. Fix bug every update data to database (bug method PUT).
                                                                                        6. Fix bug loading shimmer when change url version.
    SMILEDINING-SA22-0001#7                     09/02/2022          Customize           1. Fix bug smileDining's new use API.
    SMILEDINING-SA22-0001#8                     10/02/2022          Customize           1. Fix bug update customer phone when pickup order for first time and add javascript log error.
    SMILEDINING-SA22-0001#12                    18/02/2022          Customize           1. Combine javascript for library and comment code login with google.
    SMILEDINING-SA22-0001#22                    01/03/2022          Customize           1. Fix bug scroll food category.
    SMILEDINING-SA22-0001#23                    08/03/2022          Customize           1. Increase the security of web smiledining and fix bug deactive foodcat.
    SMILEDINING-SA22-0001#24                    08/03/2022          Customize           1. Fix bug call ajax confirm payment and validate login from GetFormsAuthentication.
    SMILEDINING-SA22-0001#37                    25/03/2022          Customize           1. Add customer ip address and change get data customer using API and change Redis using async.
    SMILEDINING-SA22-0001#39                    29/03/2022          Customize           1. Fix bug delivery address and dispatch busy.
    SMILEDINING-SA22-0001#43                    05/04/2022          Customize           1. Add disable and loading button when next to order page.
                                                                                        2. Change message for alert bot attack.
                                                                                        3. Use api for get data when confirm email.
                                                                                        4. Fix bug setting close calculate tax for delivery charge.
                                                                                        5. Fix bug guest delivery address city and state validate not found.
   SMILEDINING-SA22-0001#50                     28/04/2022          Customize           1. Change the word for notification when Incorrect billing address.
                                                                                        2. Add marketing key for send to localforyou use from centremapdomain (setting in web support)
                                                                                        3. Reduce unnecessary log error notifications.
                                                                                        4. Add log server name.
   SMILEDINING-SA22-0001#51                     13/05/2022          Customize           1. Fix bug update delivery address.
   SMILEDINING-SA22-0012#5                      20/05/2022          Customize           1. Fix bug zipCode for delivery address in webDining.
   SMILEDINING-SA22-0001#52                     27/05/2022          Customize           1. Control text from get API error.
                                                                                        2. Add log error payment to support's discord.
                                                                                        3. Fix bug announcement image overlap text.
                                                                                        4. Fix bug calculate delivery charge when distance less than setting map start mile.
   SMILEDINING-SA22-0020                        14/06/2022          Customize           1. Add new charge name 'Payment Fee' apply to order online.
   SMILEDINING-SA22-00021                       16/06/2022          Customize           1. Remove Powered by Smile on first page and adjust new footer. / Edit UI Register and Checkout.
   WEB-SA22-0040                                26/09/2022          Customize           1. New feature minimum order delivery charge.
   WEB-SA22-0053                                18/10/2022          Customize           1. Fix bug Food Category over in Footer
   WEB-SA22-0058                                14/11/2022          Customize           1. Fix bug marketing service fee in Dining and new feature marketing service fee in Contactless.
   WEB-SA22-0068                                18/12/2022          Customize           1. Add FoodSetAutoHide in WebOwner.
                                                                                        2. Hide FoodSet out of time in WebDinning and WebOntable.
   WEB-SA22-0067#2                              13/01/2023          Customize           1. Fix bug missing address number in webDinning.
   WEB-SA23-0022                                15/03/2023          Customize           1. Add apple pay for Emergepay in webDining, webGiftCard, webOntable, webSupport.
   WEB-SA23-0028                                10/04/2023          Customize           1. Change Direct Payment Method to Checkout Method for Emergepay in webDining.
   WEB-SA23-0033                                04/05/2023          Customize           1. Edit UI when food set timeout and remove food in cart on webDining, webOnTable.
   WEB-SA23-0034#2                              17/05/2023          Customize           1. Fix bug log in timeout on webDining, webGiftCard.
   WEB-SA23-0030#1                              01/06/2023          Customize           1. Fix bug UI confirm payment failed when lost internet connection by checking ticketNumber on webDining.
   WEB-SA23-0036                                16/06/2023          Customize           1. Fix bug billing address for POS on webDining, webGiftCard, webSupport.
   WEB-SA23-0039                                20/06/2023          Customize           1. Fix bug UI food detail show double scroll bar and disable search order history when invalid on webDining.
   WEB-SA23-0040#1                              27/06/2023          Customize           1. Fix bug update profile on webDining.
   WEB-SA23-0040#2                              28/06/2023          Customize           1. Fix bug update profile when don't save on webDining.
   WEB-SA23-0042                                20/07/2023          Customize           1. Fix bug UI reset password, change profile, icon, image food, address suggestion, time checkout and number with commas on webDining.
   WEB-SA23-0041                                27/07/2023          Customize           1. New feature member discount on webDining, webOwner.
   WEB-SA23-0045                                23/08/2023          Customize           1. Add setting discount time on webOwner, webDining, webOnTable.
   WEB-SA23-0051                                26/09/2023          Customize           1. Edit path for register and change text to agree to receive SMS on webDining.
*/

/*
 * Home
 */
$(document).ready(function () {
    //Added by SMILEDINING-SA22-0001#8
    //Modified by SMILEDINING-SA22-0001#37
    //window.onerror = function (errorMessage, errorUrl, errorLine) {
    //    var objUrl = new ObjUrl(cJsonLogErrorJavaScript);
    //    var requestUrl = objUrl.getUrlFromJson();
    //    var passData = { 'msg': errorMessage, 'url': errorUrl, 'line': errorLine.toString() };
    //    $.ajax({
    //        url: requestUrl,
    //        async: ajax_async,
    //        cache: ajax_cache,
    //        type: ajax_type_post,
    //        data: passData,
    //        timeout: ajax_timeout,
    //        //Added by SMILEDINING-SA22-0001#23
    //        headers: {
    //            'RequestVerificationToken': token()
    //        }
    //        //End Added by SMILEDINING-SA22-0001#23
    //    })
    //        .done(function (result) {
    //        })
    //        .fail(function (result) {
    //        });
    //    return true;
    //};
    //End Added by SMILEDINING-SA22-0001#8
    //End Modified by SMILEDINING-SA22-0001#37
    //Added by SMILEDINING-SA22-0001#37
    //window.onerror = function (errorMessage, errorUrl, errorLine) {

    //    if (errorUrl.indexOf('inject.js') != -1) {
    //        logErrorJavaScript(errorMessage, errorUrl, errorLine, false);
    //    }
    //    return true;
    //};
    //End Added by SMILEDINING-SA22-0001#37
    var version = '?2023031501';
    if (window.location.search !== version) {
        if (window.location.search.includes('email')) {
            if (window.location.search.includes(version)) {
            } else {
                var data = window.location.search;
                var startindex = data.indexOf('?');
                var reset = data.substring(startindex + 1, data.length);
                //var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + version + "&" + reset; //Modified and End by WEB-SA23-0051
                //Added by WEB-SA23-0051
                var pathName = window.location.pathname == '/' ? '/' : window.location.pathname + '/';
                var newURL = window.location.protocol + '//' + window.location.host + pathName + version + "&" + reset;
                //End Added by WEB-SA23-0051
                //Modified by SMILEDINING-SA22-0001#6
                //window.location.replace(newURL);
                //return true;
                //End Modified by SMILEDINING-SA22-0001#6
                window.history.pushState({}, '', newURL);   //Added and End by SMILEDINING-SA22-0001#6
            }
        }
        //Added by SMILEDINING-SA22-00021
        else if (window.location.hash.includes('PrivacyPolicy') || window.location.hash.includes('TermsAndConditions')) {
            return false;
        }
        //End Added by SMILEDINING-SA22-00021
        else {
            //var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + version; //Modified and End by WEB-SA23-0051
            //Added by WEB-SA23-0051
            var pathName = window.location.pathname == '/' ? '/' : window.location.pathname + '/';
            var newURL = window.location.protocol + '//' + window.location.host + pathName + version;
            //End Added by WEB-SA23-0051            
            //Modified by SMILEDINING-SA22-0001#6
            //window.location.replace(newURL);
            //return true;
            //End Modified by SMILEDINING-SA22-0001#6
            window.history.pushState({}, '', newURL);   //Added and End by SMILEDINING-SA22-0001#6
        }   
    };
    //Knockout
    function viewModel(pCurrentDateTime, pCurrentDay, pLogInType
                    , pModelGlobalConfig, pModelCustomer, pModelCustomerAddress
                    , pModelFoodSetTimeMap, pModelTimeDelivery, pModelTimePickup, pModelTimeMenu
                    , pModelChoice, pModelChoiceOption, pModelChoiceType
                    , pModelFood, pModelFoodCategory, pModelFoodSet, pModelTaxRate
                    , pModelFoodChoiceMap, pModelMapzone, pModelMapzoneGeography, pModelMapzoneMile
                    , pModelDeliveryCharge
                    , pModelAutoCharge  //Added and End by SMILEDINING-SA17-0026
                    , pModelHoliday     //Added and End by SMILEDINING-SA17-0028
                    , pModelDeliveryFreeTime //Added and End by SMILEDINING-SA19-0005
                    , pModelCustomerAddreddBilling //Added and End by SMILEDINING-SA19-0014
                    , pModelOrderLimit  //Added and End by SMILEDINING-SA20-0003
                    , pModelDiscountAuto    //Added and End by SMILEDINING-SA20-0011
                    , pModelPromotion, pModelPromotionMainPrice, pModelPromotionMainFood, pModelPromotionFreeFood, pModelPromotionGrpMainFood, pModelPromotionGrpFreeFood   //Added and End by SMILEDINING-SA20-0016
                    , pModelShopClose   //Added and End by SMILEDINING-SA20-0031
                    , pModelCustomMapZoneMile   //Added and End by SMILEDINING-SA20-0043
                    , pModelApiKey  //Added and End by SMILEDINING-SA21-0007
                    , pModelApiKeyEmergepay  //Added and End by WEB-SA23-0022
                    , pModelGiftCerImagesMobile, pModelGiftCerImagesDesktop, pModelGiftCerValue, pModelGiftCerCustomDiscount, pModelGiftCerSendType     //Added and End by SMILEDINING-SA21-0006
                    , pModelIcon, pModelFoodIconMap //Added and End by SMILEDINING-SA21-0021
                    , pMarketingServiceFee  //Added and End by SMILEDINING-SA21-0080#2
                    , pModelPaymentFee  //Added and End by SMILEDINING-SA22-0020
                    , pModelMinimumOrderDeliveryCharge  //Added and End by WEB-SA22-0040
                    , pModelDiscountTimeMap  //Added and End by WEB-SA23-0045
                    , pModelCustomerPrivilege  //Added and End by WEB-SA23-0041
                    , pFeeDining //Added and End by WEB-SA22-0058
                    , pPaymentServiceProvider //Added and End by WEB-SA23-0028
                    ) {
        try {   //Added and End by SMILEDINING-SA22-0001#37
            var self = this;
            //Added by SMILEDINING-SA22-00021
            self.showTermsAndCondition = ko.observable(false);
            self.showPrivacyProlicy = ko.observable(false);
            if (window.location.hash.includes('TermsAndConditions')) {
                self.showTermsAndCondition(true);
                $('#termsAndCondition').show();
                $('#privacyProlicy').hide();
                $('#koMenuView').hide();
                $('body').removeClass('loading');
            }
            else if (window.location.hash.includes('PrivacyPolicy')) {
                self.showPrivacyProlicy(true);
                $('#privacyProlicy').show();
                $('#termsAndCondition').hide();
                $('#koMenuView').hide();
                $('body').removeClass('loading');
            } else {
                $('#koMenuView').show();
                $('#privacyProlicy').hide();
                $('#termsAndCondition').hide();
                //End Added by SMILEDINING-SA22-00021
                self.showLoading = ko.observable(false);        //Added and End by SMILEDINING-SA21-0007
                self.loading = new LoadingViewModel();  //Added and End by SMILEDINING-SA21-0064
                //Model
                self.showMobile = ko.observable(false);
                self.showMenu = ko.observable(true);
                self.showFormCheckOut = ko.observable(false);
                self.paymentServiceProvider = ko.observable(parseInt(pPaymentServiceProvider)); //Added and End by WEB-SA23-0028
                self.currentDatetime = ko.observable(pCurrentDateTime);
                self.apiKey = ko.observable(pModelApiKey);      //Added and End by SMILEDINING-SA21-0007
                self.apiKeyEmergepay = ko.observable(pModelApiKeyEmergepay); //Added and End by WEB-SA23-0022
                self.currentDay = ko.observable(pCurrentDay);
                if (isEmpty(pLogInType)) {
                    self.logInFb = ko.observable(false);
                } else {
                    self.logInFb = ko.observable(true);
                }
                self.autoCharge = ko.mapping.fromJSON(pModelAutoCharge, {});    //Added and End by SMILEDINING-SA17-0026
                self.holiday = ko.mapping.fromJSON(pModelHoliday, {});          //Added and End by SMILEDINING-SA17-0028
                self.shopClose = ko.mapping.fromJSON(pModelShopClose, {});        //Added and End by SMILEDINING-SA20-0031
                self.paymentFee = ko.mapping.fromJSON(pModelPaymentFee, {});    //Added and End by SMILEDINING-SA22-0020
                self.dining = new DiningViewModel(); //Added and End by WEB-SA23-0030#1
                self.orderHistory = new OrderHistoryViewModel(null);            //Added and End by SMILEDINING-SA18-0005
                self.customer = new CustomerViewModel(pModelCustomer);
                self.changePassword = new ChangePassword();
                self.customerAddress = new CustomerAddressViewModel(pModelCustomerAddress);
                self.deliveryCharge = new DeliveryChargeViewModel(pModelDeliveryCharge);
                self.globalConfig = new GlobalConfigViewModel(pModelGlobalConfig);
                self.shopFoodSetTimeMap = new FoodSetTimeMapViewModel(pModelFoodSetTimeMap, self.currentDay());
                self.shopTimeDelivery = new TimeDeliveryViewModel(pModelTimeDelivery, self.currentDay());
                self.shopTimePickup = new TimePickupViewModel(pModelTimePickup, self.currentDay());
                //self.shopTimeMenu = new TimeMenuViewModel(pModelTimeMenu, self.currentDay(), self.currentDatetime());     //Modified and End by SMILEDINING-SA20-0004
                self.shopTimeMenu = new TimeMenuViewModel(pModelTimeMenu, self.currentDay(), self.currentDatetime(), self.globalConfig);  //Added and End by SMILEDINING-SA20-0004
                self.orderLimit = ko.mapping.fromJSON(pModelOrderLimit, {});    //Added and End by SMILEDINING-SA20-0003
                //self.map = new MapViewModel(pModelMapzone, pModelMapzoneGeography, pModelMapzoneMile);    //Modified and End by SMILEDINING-SA19-0005
                //self.map = new MapViewModel(pModelMapzone, pModelMapzoneGeography, pModelMapzoneMile, pModelDeliveryFreeTime, self.currentDatetime()); //Added and End by SMILEDINING-SA19-0005   //Modified and End by SMILEDINING-SA20-0043
                self.map = new MapViewModel(pModelMapzone, pModelMapzoneGeography, pModelMapzoneMile, pModelDeliveryFreeTime, pModelCustomMapZoneMile, self.currentDatetime());     //Added and End by SMILEDINING-SA20-0043
                //self.menu = new MenuViewModel(pModelFoodSet,pModelFoodCategory,pModelFood); //Modified and End by SMILEDINING-SA18-0006
                //self.menu = new MenuViewModel(pModelFoodSet, pModelFoodCategory, pModelFood, pModelFoodSetTimeMap, self.currentDatetime()); //Added and End by SMILEDINING-SA18-0006  //Modified and End by SMILEDINING-SA21-0021
                self.menu = new MenuViewModel(pModelFoodSet, pModelFoodCategory, pModelFood, pModelFoodSetTimeMap, pModelIcon, pModelFoodIconMap, self.currentDatetime()); //Added and End by SMILEDINING-SA21-0021
                self.currentFood = new CurrentFoodViewModel(pModelChoice, pModelChoiceOption, pModelFoodChoiceMap, pModelTaxRate);
                self.guestLogin = new GuestViewModel();     //Added and End by SMILEDINING-SA20-0004
                self.cartId = ko.observable('');
                self.promotion = new PromotionViewModel(pModelPromotion, pModelPromotionMainPrice, pModelPromotionMainFood, pModelPromotionFreeFood, pModelPromotionGrpMainFood, pModelPromotionGrpFreeFood, self.currentDatetime());  //Added and End by SMILEDINING-SA20-0016
                //self.cart = new CartViewModel();      //Modified and End by SMILEDINING-SA19-0014
                //self.cart = new CartViewModel(pModelCustomerAddreddBilling);    //Added and End by SMILEDINING-SA19-0014      //Modified and End by SMILEDINING-SA20-0006 
                //self.cart = new CartViewModel(pModelCustomerAddreddBilling, pModelGlobalConfig);    //Added and End by SMILEDINING-SA20-0006      //Modified and End by SMILEDINING-SA20-0011
                //self.cart = new CartViewModel(pModelCustomerAddreddBilling, pModelGlobalConfig, pModelDiscountAuto);    //Added and End by SMILEDINING-SA20-0011    //Modified and End by SMILEDINING-SA21-0080#2
                //self.cart = new CartViewModel(pModelCustomerAddreddBilling, pModelGlobalConfig, pModelDiscountAuto, pMarketingServiceFee);    //Added and End by SMILEDINING-SA21-0080#2 //Modified and End by WEB-SA22-0058
                //self.cart = new CartViewModel(pModelCustomerAddreddBilling, pModelGlobalConfig, pModelDiscountAuto, pMarketingServiceFee, pFeeDining);    //Added and End by WEB-SA22-0058 //Modified and End by WEB-SA23-0045 
                self.cart = new CartViewModel(pModelCustomerAddreddBilling, pModelGlobalConfig, pModelDiscountAuto, pMarketingServiceFee, pFeeDining, pModelDiscountTimeMap); //Added and End by WEB-SA23-0045
                self.checkout = new CheckOutViewModel();
                //Added by SMILEDINING-SA21-0006
                self.giftCerImages = new GiftCerImagesViewModel(pModelGiftCerImagesMobile, pModelGiftCerImagesDesktop);
                self.giftCerAmount = new GiftCerAmountViewModel(pModelGiftCerValue);
                self.giftCerCustomDiscount = new GiftCerCustomDiscount(pModelGiftCerCustomDiscount);
                self.giftCerDetail = new GiftCerDetailViewModel(pModelGiftCerSendType, pCurrentDateTime);
                //End Added by SMILEDINING-SA21-0006
                self.deliverect = new DeliverectViewModel(self.globalConfig); //Added and End by SMILEDINING-SA21-0066#3
                self.minimumOrderDeliveryCharge = ko.mapping.fromJSON(pModelMinimumOrderDeliveryCharge, {}); //Added and End by WEB-SA22-0040
                self.customerPrivilege = new CustomerPrivilegeViewModel(pModelCustomerPrivilege, self.customer); //Added and End by WEB-SA23-0041

                self.event = new Event();

                //View
                self.mobile = new Mobile();
                self.desktop = new DeskTop();
                if (!isEmpty(pModelCustomer)) {
                    self.desktop.logInSuccessed(true);
                    self.mobile.logInSuccessed(true);
                }
                //Added by SMILEDINING-SA22-0001#37
            }   //Added and End by SMILEDINING-SA22-00021
        }
        catch (err) {
            //logErrorJavaScript(err, 'home-index.js/viewModel', 270, true);    //Modified and End by SMILEDINING-SA22-0001#50
        }
        //End Added by SMILEDINING-SA22-0001#37
    };
    //Added by SMILEDINING-SA22-00021
    if (window.location.hash.includes('TermsAndConditions') || window.location.hash.includes('PrivacyPolicy')) {
        vmViewIndex = new viewModel();
    } else {
        //End Added by SMILEDINING-SA22-00021
        var getCurrentTime = JSON.parse(getCustomerObjFormAjax(cJsonGetDateTime, ''));   //Added and End by SMILECONTACTLESS-SA20-0001

        var varAuthenticated = $('#divVarAuthenticated').val();
        var varLogInType = $('#divVarLogInType').val();
        var varCustomerKey = $('#divVarCustomerKey').val(); //Added and End by SMILEDINING-SA21-0026#2
        //Modified by SMILECONTACTLESS-SA20-0001
        //var varCurrentDay = $('#divVarCurrentDay').val();
        //var varCurrentDateTime = $('#divVarCurrentDateTime').val();
        //End Modified by SMILECONTACTLESS-SA20-0001
        //Added by SMILECONTACTLESS-SA20-0001
        if (getCurrentTime.currentDay.length == 0)
            varCurrentDay = $('#divVarCurrentDay').val();
        else
            varCurrentDay = getCurrentTime.currentDay;
        if (getCurrentTime.currentDateTime.length == 0)
            varCurrentDateTime = $('#divVarCurrentDateTime').val();
        else
            varCurrentDateTime = getCurrentTime.currentDateTime;
        //End Added by SMILECONTACTLESS-SA20-0001
        var varShowResetPassswordForm = convertStrToBool($('#divVarShowResetPasswordForm').val());
        //Added by SMILEDINING-SA21-0064
        var varConfirmAccount = convertStrToBool($('#divVarConfirmAccount').val());
        var varDeleteAccount = convertStrToBool($('#divVarDeleteAccount').val());
        var varConfirmToken = $('#divVarConfirmToken').val();
        //End Added by SMILEDINING-SA21-0064

        var modelGlobalConfig = $('#divModelGlobalConfig').val();
        var modelFoodSetTimeMap = $('#divModelFoodSetTimeMap').val();
        var modelTimeDelivery = $('#divModelTimeDelivery').val();
        var modelTimePickup = $('#divModelTimePickup').val();
        var modelTimeMenu = $('#divModelTimeMenu').val();

        var modelAutoCharge = $('#divModelAutoCharge').val();       //Added and End by SMILEDINING-SA17-0026
        var modelPaymentFee = $('#divModelPaymentFee').val();       //Added and End by SMILEDINING-SA22-0020
        var modelDiscountAuto = $('#divModelAutoDiscount').val();       //Added and End by Added and End by SMILEDINING-SA20-0011
        var modelChoice = $('#divModelChoice').val();
        var modelChoiceOption = $('#divModelChoiceOption').val();
        var modelChoiceType = $('#divModelChoiceType').val();
        var modelDeliveryCharge = $('#divModelDeliveryCharge').val();
        var modelFood = $('#divModelFood').val();
        var modelFoodCategory = $('#divModelFoodCategory').val();
        var modelFoodSet = $('#divModelFoodSet').val();
        var modelHoliday = $('#divModelHoliday').val();       //Added and End by SMILEDINING-SA17-0028
        var modelMapzone = $('#divModelMapZone').val();
        var modelMapzoneGeography = $('#divModelMapZoneGeography').val();
        var modelMapzoneMile = $('#divModelMapZoneMile').val();
        var modelDeliveryFreeTime = $('#divModelDeliveryFreeTime').val(); //Added and End by SMILEDINING-SA19-0005
        var modelOrderLimit = $('#divModelOrderLimit').val();    //Added and End by SMILEDINING-SA20-0003
        var modelTaxRate = $('#divModelTaxRate').val();
        var modelFoodChoiceMap = $('#divModelFoodChoiceMap').val();
        var serverMaintenance = $('#divErrorServerMaintenance').data('request-url');
        var showAnnounce = false;
        var showAnnounceCustom = false;     //Added and End by SMILEDINING-SA20-0028
        var verifyKeepAlive = true;     //Added and End by SMILECONTACTLESS-SA20-0001    

        //Added by SMILEDINING-SA20-0016
        var modelPromotion = $('#divPromotion').val();
        var modelPromotionMainPrice = $('#divPromotionMainPrice').val();
        var modelPromotionMainFood = $('#divPromotionMainFood').val();
        var modelPromotionFreeFood = $('#divPromotionFreeFood').val();
        var modelPromotionGroupMainFood = $('#divPromotionGroupMainFood').val();
        var modelPromotionGroupFreeFood = $('#divPromotionGroupFreeFood').val();
        //End Added by SMILEDINING-SA20-0016
        var modelShopClose = $('#divShopClose').val();  //Added and End by SMILEDINING-SA20-0031
        var modelCustomMapZoneMile = $('#divCustomMapZoneMile').val();  //Added and End by SMILEDINING-SA20-0043

        var modelApiKey = $('#divApiKey').val();    //Added and End by SMILEDINING-SA21-0007
        var modelApiKeyEmergepay = $('#divApiKeyEmergepay').val();    //Added and End by WEB-SA23-0022
        
        //Added by SMILEDINING-SA21-0006
        var modelGiftCerImagesMobile = $('#divModelGiftCerImagesMobile').val();
        var modelGiftCerImagesDesktop = $('#divModelGiftCerImagesDesktop').val();
        var modelGiftCerValue = $('#divModelGiftCerValue').val();
        var modelGiftCerCustomDiscount = $('#divModelGiftCerCustomDiscount').val();
        var modelGiftCerSendType = $('#divModelGiftCerSendType').val();
        //End Added by SMILEDINING-SA21-0006
        //Added by SMILEDINING-SA21-0021
        var modelIcon = $('#divModelIcon').val();
        var modelFoodIconMap = $('#divModelFoodIconMap').val();
        //End Added by SMILEDINING-SA21-0021
        var modelMinimumOrderDeliveryCharge = $('#divModelMinimumOrderDeliveryCharge').val();   //Added and End by WEB-SA22-0040
        var modelDiscountTimeMap = $('#divModelDiscountTimeMap').val();   //Added and End by WEB-SA23-0045
        var marketingServiceFee = $('#divMarketingServiceFee').val();   //Added and End by SMILEDINING-SA21-0080#2
        var varFeeDining = $('#divVarFeeDining').val(); //Added and End by WEB-SA22-0058
        var varPaymentServiceProvider = $('#divVarPaymentServiceProvider').val(); //Added and End by WEB-SA23-0028
        if (!isEmpty(varAuthenticated)) {
            //var customerProfile = getCustomerObjFormAjax(cJsonGetCustomer, varAuthenticated); //Modified and End by SMILEDINING-SA21-0026#2  
            //Added by SMILEDINING-SA22-0001#24
            var jsonToken = getCustomerObjFormAjax(cJsonGetHeaderToken);
            if (jsonToken != null) {
                var headerToken = JSON.parse(jsonToken)
                $('#divVarHeader').val(headerToken);
            }
            //End Added by SMILEDINING-SA22-0001#24
            //Added by SMILEDINING-SA21-0026#2
            var customerProfile = getCustomerObjFormAjax(cJsonGetCustomer, varCustomerKey);
            var customerData = ko.mapping.fromJSON(customerProfile, {});
            if (customerData.customerId() != varAuthenticated) {
                varAuthenticated = customerData.customerId();
                $('#divVarAuthenticated').val(varAuthenticated);
            }
            //End Added by SMILEDINING-SA21-0026#2
            var customerAddress = getCustomerObjFormAjax(cJsonGetCustomerAddress, varAuthenticated);
            var customerAddressBilling = getCustomerObjFormAjax(cJsonGetCustomerAddressBilling, varAuthenticated); //Added and End by SMILEDINING-SA19-0014
            //var orderHistory = JSON.parse(getCustomerObjFormAjax(cJsonGetOrderHistory, varAuthenticated)); //Added and End by SMILEDINING-SA18-0005   //Modified and End by SMILEDINING-SA22-0001
            //Added by SMILEDINING-SA22-0001
            var orderHistory = getOrderHistoryFormAjax(cJsonGetOrderHistory, varAuthenticated);
            var orderHistoryData = JSON.parse(orderHistory.obj);
            var orderHistoryDate = JSON.parse(orderHistory.dataDate);
            //End Added by SMILEDINING-SA22-0001
            var modelCustomerPrivilege = getCustomerObjFormAjax(cJsonGetCustomerPrivilege, varAuthenticated); //Added and End by WEB-SA23-0041
            vmViewIndex = new viewModel(varCurrentDateTime, varCurrentDay, varLogInType
                , modelGlobalConfig, customerProfile, customerAddress
                , modelFoodSetTimeMap, modelTimeDelivery, modelTimePickup, modelTimeMenu
                , modelChoice, modelChoiceOption, modelChoiceType, modelFood
                , modelFoodCategory, modelFoodSet, modelTaxRate
                , modelFoodChoiceMap, modelMapzone, modelMapzoneGeography, modelMapzoneMile
                , modelDeliveryCharge
                , modelAutoCharge     //Added and End by SMILEDINING-SA17-0026
                , modelHoliday        //Added and End by SMILEDINING-SA17-0028
                , modelDeliveryFreeTime //Added and End by SMILEDINING-SA19-0005
                , customerAddressBilling //Added and End by SMILEDINING-SA19-0014
                , modelOrderLimit     //Added and End by SMILEDINING-SA20-0003
                , modelDiscountAuto    //Added and End by SMILEDINING-SA20-0011
                , modelPromotion, modelPromotionMainPrice, modelPromotionMainFood, modelPromotionFreeFood, modelPromotionGroupMainFood, modelPromotionGroupFreeFood   //Added and End by SMILEDINING-SA20-0016
                , modelShopClose  //Added and End by SMILEDINING-SA20-0031
                , modelCustomMapZoneMile  //Added and End by SMILEDINING-SA20-0043
                , modelApiKey     //Added and End by SMILEDINING-SA21-0007
                , modelApiKeyEmergepay //Added and End by WEB-SA23-0022
                , modelGiftCerImagesMobile, modelGiftCerImagesDesktop, modelGiftCerValue, modelGiftCerCustomDiscount, modelGiftCerSendType   //Added and End by SMILEDINING-SA21-0006
                , modelIcon, modelFoodIconMap //Added and End by SMILEDINING-SA21-0021
                , marketingServiceFee //Added and End by SMILEDINING-SA21-0080#2
                , modelPaymentFee //Added and End by SMILEDINING-SA22-0020
                , modelMinimumOrderDeliveryCharge //Added and End by WEB-SA22-0040
                , modelDiscountTimeMap //Added and End by WEB-SA23-0045
                , modelCustomerPrivilege //Added and End by WEB-SA23-0041
                , varFeeDining //Added and End by WEB-SA22-0058
                , varPaymentServiceProvider //Added and End by WEB-SA23-0028
            );

            //DataOrderHistoryViewModel(orderHistory, cReOrder); //Added and End by SMILEDINING-SA18-0005   //Modified and End by SMILEDINING-SA22-0001
            DataOrderHistoryViewModel(orderHistoryData, orderHistoryDate, cReOrder);  //Added and End by SMILEDINING-SA22-0001
            setCurrentPhone();
        } else {
            vmViewIndex = new viewModel(varCurrentDateTime, varCurrentDay, varLogInType
                , modelGlobalConfig, null, null
                , modelFoodSetTimeMap, modelTimeDelivery, modelTimePickup, modelTimeMenu
                , modelChoice, modelChoiceOption, modelChoiceType, modelFood
                , modelFoodCategory, modelFoodSet, modelTaxRate
                , modelFoodChoiceMap, modelMapzone, modelMapzoneGeography, modelMapzoneMile
                , modelDeliveryCharge
                , modelAutoCharge     //Added and End by SMILEDINING-SA17-0026
                , modelHoliday        //Added and End by SMILEDINING-SA17-0028
                , modelDeliveryFreeTime //Added and End by SMILEDINING-SA19-0005
                //Added by SMILEDINING-SA20-0003  
                , null
                , modelOrderLimit
                //End Added by SMILEDINING-SA20-0003
                , modelDiscountAuto    //Added and End by SMILEDINING-SA20-0011
                , modelPromotion, modelPromotionMainPrice, modelPromotionMainFood, modelPromotionFreeFood, modelPromotionGroupMainFood, modelPromotionGroupFreeFood   //Added and End by SMILEDINING-SA20-0016
                , modelShopClose  //Added and End by SMILEDINING-SA20-0031
                , modelCustomMapZoneMile  //Added and End by SMILEDINING-SA20-0043
                , modelApiKey     //Added and End by SMILEDINING-SA21-0007
                , modelApiKeyEmergepay //Added and End by WEB-SA23-0022
                , modelGiftCerImagesMobile, modelGiftCerImagesDesktop, modelGiftCerValue, modelGiftCerCustomDiscount, modelGiftCerSendType   //Added and End by SMILEDINING-SA21-0006
                , modelIcon, modelFoodIconMap //Added and End by SMILEDINING-SA21-0021
                , marketingServiceFee //Added and End by SMILEDINING-SA21-0080#2
                , modelPaymentFee //Added and End by SMILEDINING-SA22-0020
                , modelMinimumOrderDeliveryCharge //Added and End by WEB-SA22-0040
                , modelDiscountTimeMap //Added and End by WEB-SA23-0045
                , null //Added and End by WEB-SA23-0041
                , varFeeDining //Added and End by WEB-SA22-0058
                , varPaymentServiceProvider //Added and End by WEB-SA23-0028
            );
        }
    }   //Added and End by SMILEDINING-SA22-00021

    if (!vmViewIndex.showTermsAndCondition() && !vmViewIndex.showPrivacyProlicy()) {    //Added and End by SMILEDINING-SA22-00021
        //_currentTime = moment(varCurrentDateTime, moment_date_format_mmddyyyyhhmmssa); //Modified and End by WEB-SA23-0033
        setCurrentTime(varCurrentDateTime); //Added and End by WEB-SA23-0033
        //Modified by SMILEDINING-SA17-0001
        //setInterval(function () {
        //    updateTime();
        //}, 300000);
        //End Modified by SMILEDINING-SA17-0001

        //Added by SMILEDINING-SA17-0001
        setInterval(function () {
             updateTime();
        }, 60000);
        //End Added by SMILEDINING-SA17-0001

        //setInterval(function () {
        //    updateTime();
        //}, 30000);

        koBindingHandlers();    //Added and End by SMILEDINING-SA21-0006

        ko.applyBindings(vmViewIndex, document.getElementById('koMenuView'));

        //$('.showMenu').removeClass('gb_hidden'); //Added and End by SMILEDINING-SA22-0001 //Modified and End by SMILEDINING-SA22-0001#5
        refreshStore();
        //setPickupAndDeliveryTime();   //Modified and End by SMILEDINING-SA20-0031#2

        //Added by SMILEDINING-SA20-0004
        //if (vmViewIndex.globalConfig.timemenuinit() !== cASAP) {      //Modified and End by SMILEDINING-SA20-0013
        if (vmViewIndex.globalConfig.timemenuinit() !== cASAP && vmViewIndex.globalConfig.timemenuinit() !== cASAPOnly) { //Added and End by SMILEDINING-SA20-0013
            const value = vmViewIndex.shopTimeMenu.menuHourDay().value;
            var selectItem = '';
            //Modified by SMILEDINING-SA20-0034#2
            //if (vmViewIndex.globalConfig.timemenuinit() === 'TODAY')                      
            //    selectItem = vmViewIndex.shopTimeMenu.menuHourDay().dataSource._array[1].value;
            //if (vmViewIndex.globalConfig.timemenuinit() === 'TODAYONLY') 
            //    selectItem = vmViewIndex.shopTimeMenu.menuHourDay().dataSource._array[0].value;
            //changeMenuHourDay(vmViewIndex.currentDay(), vmViewIndex.currentDatetime(), value, selectItem);
            //End Modified by SMILEDINING-SA20-0034#2

            //Added by SMILEDINING-SA20-0034#2
            if (vmViewIndex.globalConfig.timemenuinit() === 'TODAY')
                selectItem = vmViewIndex.shopTimeMenu.menuHourDay().dataSource._array[1].datetime;
            if (vmViewIndex.globalConfig.timemenuinit() === 'TODAYONLY')
                selectItem = vmViewIndex.shopTimeMenu.menuHourDay().dataSource._array[0].datetime;
            //Added by SMILEDINING-SA21-0052
            if (vmViewIndex.globalConfig.timemenuinit() === 'NOASAP')
                selectItem = vmViewIndex.shopTimeMenu.menuHourDay().dataSource._array[0].datetime;
            //End Added by SMILEDINING-SA21-0052
            //Added by SMILEDINING-SA20-0038
            if (vmViewIndex.globalConfig.timemenuinit() === cCustom) {
                selectItem = vmViewIndex.shopTimeMenu.menuHourDay().dataSource._array[0].datetime;
                //changeMenuHourDay(vmViewIndex.shopTimeMenu.advanceDay(), vmViewIndex.shopTimeMenu.customCurrentDateTime(), value, moment(selectItem, moment_date_format_mmddyyyyhhmmssa).format(moment_date_format_yyyymmdd));         //Modified and End by SMILEDINING-SA20-0031
                changeMenuHourDay(vmViewIndex.shopTimeMenu.advanceDay(), vmViewIndex.shopTimeMenu.customCurrentDateTime(), value, moment(selectItem, moment_date_format_mmddyyyyhhmmssa).format(moment_date_format_yyyymmdd), true);         //Added and End by SMILEDINING-SA20-0031
            } else {
                //changeMenuHourDay(vmViewIndex.currentDay(), vmViewIndex.currentDatetime(), value, moment(selectItem, moment_date_format_mmddyyyyhhmmssa).format(moment_date_format_yyyymmdd));              //Modified and End by SMILEDINING-SA20-0031
                changeMenuHourDay(vmViewIndex.currentDay(), vmViewIndex.currentDatetime(), value, moment(selectItem, moment_date_format_mmddyyyyhhmmssa).format(moment_date_format_yyyymmdd), true);              //Added and End by SMILEDINING-SA20-0031
            }
            //End Added by SMILEDINING-SA20-0038
            //changeMenuHourDay(vmViewIndex.currentDay(), vmViewIndex.currentDatetime(), value, moment(selectItem, moment_date_format_mmddyyyyhhmmssa).format(moment_date_format_yyyymmdd));        //Modified and End by SMILEDINING-SA20-0038
            //End Added by SMILEDINING-SA20-0034#2
            vmViewIndex.shopTimeMenu.menuHourReload(false); //Added and End by SMILEDINING-SA20-0031
        }
        //End Added by SMILEDINING-SA20-0004

        //getDistance();
        //distance();

        //Sammy(function () {
        //    this.get('#:view/:id', function () {
        //        var groupId = this.params.id;
        //        var groupSplit = splitString(groupId, '_');
        //        var foodSetId = groupSplit[0];
        //        var foodCatId = groupSplit[1];
        //        var foodId = groupSplit[2];
        //        //vmViewIndex.currentView(this.params.view);
        //    });
        //}).run('#Home');

        $('#frmConfirmPayment').card({
            // a selector or DOM element for the container
            // where you want the card to appear
            container: '.card-wrapper', // *required*
            // all of the other options from above
            messages: {
                validDate: 'expire\ndate',
                monthYear: 'mm/yyyy'
            },
            width: 200,
            placeholders: {
                number: '•••• •••• •••• ••••',
                name: 'Full Name',
                expiry: '••/••••',
                cvc: '•••'
            },
            masks: {
                cardNumber: '•' // optional - mask card number
            }
        });

        //Submit Form
        $(document).on('submit', 'form', function (e) {
            //e.preventDefault();

            if (!checkInternetConnection()) {
                var objAlert = new ObjAlert(formId, cError_Fail_NoInternet, false);
                objAlert.getAlert();
                return false;
            };

            var form = $(this);
            var formId = form.attr('id');
            var parent = $(this).parent();
            var objValidate = new ObjValidateForm(formId, parent);
            objValidate.verifyData();
            if (objValidate.error.length > 0) {
                if (objValidate.showAlert) {
                    var messageError = convertArrToString(objValidate.error);
                    //swal(cSwal_Alert_Error, replaceNewLineToBr(messageError), cSwal_Icon_Error);  //Modified and End by SMILEDINING-SA21-0011
                    swal('', replaceNewLineToBr(messageError), cSwal_Icon_Info);    //Added and End by SMILEDINING-SA21-0011
                }
                return false;
            } else {
                addSpinButton(formId);
                var serializedForm = $(this).serialize();
                var objUrl = new ObjUrl(formId);
                var requestUrl = objUrl.getUrlSubmitForm();
                if (isEmpty(requestUrl)) {
                    //swal(cSwal_Alert_Error, cError_Dev_Url, cSwal_Icon_Error);    //Modified and End by SMILEDINING-SA21-0011
                    swal('', cError_Dev_Url, cSwal_Icon_Info);   //Added and End by SMILEDINING-SA21-0011
                    return false;
                }

                var ajaxForm = $.ajax({
                    url: requestUrl,
                    async: ajax_async,
                    cache: ajax_cache,
                    type: ajax_type_post,
                    data: serializedForm,
                    timeout: ajax_timeout, // timeout after 60 seconds
                    //Added by SMILEDINING-SA22-0001#23
                    headers: {
                        'RequestVerificationToken': token()
                    }
                    //End Added by SMILEDINING-SA22-0001#23
                });

                ajaxForm.done(function (result) {
                    removeSpinButton(formId);
                    //Added by SMILEDINING-SA22-0001#43
                    if (formId == cfrmGuestLogin || formId == cfrmGuestLoginUpdate) {
                        removeSpinButtonUser();
                    }
                    //End Added by SMILEDINING-SA22-0001#43
                    if (result.status) {
                        afterSubmitForm(formId, result);
                    }
                    if (objValidate.showAlert) {
                        //if (formId == cfrmPayOrder || formId == cfrmConfirmPayment || formId == cfrmDiscount) {       //Modified and End by SMILEDINING-SA20-0040
                        //if (formId == cfrmPayOrder || formId == cfrmConfirmPayment || formId == cfrmDiscount) {       //Modified and End by SMILEDINING-SA20-0040
                        //Modified by SMILEDINING-SA22-0001
                        //if (formId == cfrmPayOrder || formId == cfrmConfirmPayment || formId == cfrmDiscount || formId == cfrmGuestLogin) {     //Added and End by SMILEDINING-SA20-0040  
                        //    if (!result.status) {
                        //        //Modified by SMILEDINING-SA21-0011
                        //        //var objAlert = new ObjAlert(formId, result.message, result.status);
                        //        //objAlert.getAlert();
                        //        //End Modified by SMILEDINING-SA21-0011
                        //        //Added by SMILEDINING-SA21-0011
                        //        if (!vmViewIndex.checkout.forcePayOrder()) { //Added and End by SMILEDINING-SA21-0079
                        //            if (result.obj == "redirect") {
                        //                swal(cSwal_Alert_Error, result.message, cSwal_Icon_Error);
                        //            } else {
                        //                var objAlert = new ObjAlert(formId, result.message, result.status);
                        //                objAlert.getAlert();
                        //            }
                        //            //End Added by SMILEDINING-SA21-0011
                        //            //Added by SMILEDINING-SA19-0005
                        //            if (formId == cfrmPayOrder && result.obj == "redirect") {
                        //                setCouponDelivery(null);
                        //                redirectMain();
                        //            }
                        //            //End Added by SMILEDINING-SA19-0005
                        //            if (formId == cfrmDiscount) {
                        //                setDiscount(JSON.parse(result.obj));
                        //                setCouponDelivery(null); //Added and End By SMILEDINING-SA19-0008
                        //            }
                        //            //AddedBy SMILEDINING-SA19-0008
                        //            if (formId == cfrmPayOrder) {
                        //                setCouponDelivery(null);
                        //            }
                        //            //End Added By SMILEDINING-SA19-0008
                        //        }   //Added and End by SMILEDINING-SA21-0079
                        //        vmViewIndex.checkout.forcePayOrder(false);  //Added and End by SMILEDINING-SA21-0079
                        //    }
                        //}
                        //End Modified by SMILEDINING-SA22-0001
                        //Added by SMILEDINING-SA22-0001
                        if (formId == cfrmConfirmPayment || formId == cfrmDiscount || formId == cfrmGuestLogin) {
                            if (!result.status) {
                                if (result.obj == "redirect") {
                                    swal(cSwal_Alert_Error, result.message, cSwal_Icon_Error);
                                } else {
                                    var objAlert = new ObjAlert(formId, result.message, result.status);
                                    objAlert.getAlert();
                                }
                                if (formId == cfrmDiscount) {
                                    setDiscount(JSON.parse(result.obj));
                                    setCouponDelivery(null);
                                    vmViewIndex.cart.isCouponCodeApply(false); //Added and End by WEB-SA23-0041
                                }
                            }
                        }
                        //End Added by SMILEDINING-SA22-0001
                        else {

                            //Added by KENG
                            if (vmViewIndex.globalConfig.captchaEnable()) {
                                if (formId == cfrmRegister) {
                                    resetCaptCha();
                                }
                            }
                            //End Added by KENG

                            var objAlert = new ObjAlert(formId, result.message, result.status);
                            objAlert.getAlert();
                        }
                    }
                });
                //Modified by SMILEDINING-SA21-0067
                //ajaxForm.fail(function (result) {
                //    removeSpinButton(formId);
                //    var objAlert = new ObjAlert(formId, cError_Fail_TimeOut, false);
                //    objAlert.getAlert();
                //});
                //End Modified by SMILEDINING-SA21-0067
                //Added by SMILEDINING-SA21-0067
                ajaxForm.fail(function (result, error) {
                    removeSpinButton(formId);
                    //Added by SMILEDINING-SA22-0001#43
                    if (formId == cfrmGuestLogin || formId == cfrmGuestLoginUpdate) {
                        removeSpinButtonUser();
                    }
                    //End Added by SMILEDINING-SA22-0001#43
                    //var errMsg = checkMsgAjaxFail(result, error); //Modified and End by SMILEDINING-SA21-0067#1
                    var errMsg = checkMsgAjaxFail(result);   //Added and End by SMILEDINING-SA21-0067#1
                    var objAlert = new ObjAlert(formId, errMsg, false);
                    objAlert.getAlert();
                });
                //End Added by SMILEDINING-SA21-0067
            }
            return false;

        });

        //Add Slide Swipe
        $('nav.nav-mobile').slideAndSwipe();

        /*Close Popover click out size*/
        $('html').on('mouseup', function (e) {
            //if (!isTouchDevice()) {   //Modified and End by SMILEDINING-SA18-0018
            if (!$(e.target).closest('.popover').length && $(e.target).attr('id') != 'btnCheckOut' && $(e.target).text() != 'Check Out' && $(e.target).text() != 'OK') {
                $('.popover').each(function () {
                    $('[data-original-title]').popover('hide');
                    $('.popover-login').blur();
                });
            }
            //}     //Modified and End by SMILEDINING-SA18-0018
        });

        /*Close Popover resize browser*/
        $(window).resize(function (e) {
            hasDropDownScroll();    //Added and End WEB-SA22-0053
            if (!isTouchDevice()) {
                if (!$(e.target).closest('.popover').length
                    && $(e.target).attr('id') != 'btnCheckOut' && $(e.target).text() != 'Check Out' && $(e.target).text() != 'OK') {
                    $('.popover').each(function () {
                        $('[data-original-title]').popover('hide');
                        $('.popover-login').blur();
                    });
                }
                setScaleCreditCardImage();
            }
            //hasDropDownScroll();    //Added and End by SMILEDINING-SA18-0017// Modified and End by WEB-SA22-0053
            

            //Modified by SMILEDINING-SA21-0027#2
            ////Added by SMILEDINING-SA18-0036
            //if ($('.logo-mobile .navbar-brand p span').innerWidth() != 0) {
            //    var navbarWidth = $('.nav-bar').outerWidth() - 92;
            //    var shopNameWidth = $('.logo-mobile .navbar-brand p span').innerWidth();
            //    if (shopNameWidth > navbarWidth)
            //        //checkSizeShopNameWidth(0, 0, 0, true);    //Modified and End by SMILEDINING-SA18-0045
            //        checkSizeShopNameWidth(0, 0, 0, true, 'mobile'); //Added and End by SMILEDINING-SA18-0045
            //    else if (shopNameWidth + 10 < navbarWidth)
            //        //checkSizeShopNameWidth(0, 0, 0, false);   //Modified and End by SMILEDINING-SA18-0045
            //        checkSizeShopNameWidth(0, 0, 0, false, 'mobile'); //Added and End by SMILEDINING-SA18-0045
            //}
            //    //Added by SMILEDINING-SA18-0045
            //else if ($(window).width() + 17 >= 576 && $(window).width() + 17 < 768) {
            //    var navbarWidth = 285;
            //    var shopNameWidth = $('.menu-desktop .navbar-brand p').innerWidth();
            //    if (shopNameWidth > navbarWidth)
            //        checkSizeShopNameWidth(0, 0, 0, true, 'tablet');
            //    else if (shopNameWidth + 10 < navbarWidth)
            //        checkSizeShopNameWidth(0, 0, 0, false, 'tablet');
            //}
            //else {
            //    $('.menu-desktop .navbar-brand p').css('font-size', '1.25rem');
            //}
            ////End Added by SMILEDINING-SA18-0045
            ////End Added by SMILEDINING-SA18-0036
            //End Modified by SMILEDINING-SA21-0027#2

        });

        setScaleCreditCardImage();

        /*Scroll Spy*/
        $('body').scrollspy({
            target: '#scroll-foodcategory',
            offset: 100
        });

        $(document).on('click', '#scroll-foodcategory ul li a, #footer-nav-main ul li a', function (event) {
            if (hasScroll()) {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({                    
                    scrollTop: $(hash).offset().top - 80 + 'px'
                }, 800);
            }
        });

        $(document).on('click', '#footer-nav-main ul li a', function (event) {
            toggleFoodCategory();
        });

        /*Menu Footer*/
        var navigationContainer = $('.footer-nav'), mainNavigation = navigationContainer.find('#footer-nav-main ul');
        //open or close the menu clicking on the bottom "menu" link
        $('.footer-nav-trigger').on('click', function () {
            toggleFoodCategory();
        });

        /*Back to top*/
        $('.backToTop').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, '300');
        });

        $(window).scroll(function (event) {            
            var scroll = $(window).scrollTop();
            hasDropDownScroll();    //Added and End WEB-SA22-0053
            var isMobile = checkMobileForResolution() || checkMiddleMobileForResolution();
            if (isMobile) {
                $('.panel-cart').stop().animate({
                    top: 0
                });
            } else {
                var windowHeight = $(window).outerHeight(true);
                var offset = $('.panel-cart').offset();
                var cartHeight = $('.panel-cart').outerHeight(true);
                var totalTop = cartHeight + offset.top - 90;
                var footerHeight = $('.footer').outerHeight(true);
                if (cartHeight >= windowHeight || totalTop > (windowHeight - footerHeight)) {
                    var balance = (cartHeight - windowHeight) + footerHeight + 100;
                    $('.panel-cart').stop().animate({
                        top: -balance
                    });
                }
                
                if (scroll < 100) {
                    $('.panel-cart').stop().animate({
                        //top: 90 //Modified and End by SMILEDINING-SA21-0027#2
                        top: 121 //Added and End by SMILEDINING-SA21-0027#2
                    });
                }
            }           
            if (scroll < 130) {
                $('#scroll-foodcategory').css('top', '');
                $('#scroll-foodcategory').find('li a:eq(0)').addClass('active');
            } else if (scroll >= 130) {
                //Added by SMILEDINING-SA21-0027#3
                var shopDescHeight = $('.shopdesc').outerHeight(true);
                $('#scroll-foodcategory').css('top', (shopDescHeight - 13) + 'px');
                //End Added by SMILEDINING-SA21-0027#3
                //$('#scroll-foodcategory').css('top', 130 + 'px'); //Modified and End by SMILEDINING-SA21-0027#3

                //Added by SMILEDINING-SA18-0017    
                if (hasScroll() && !isEmpty(_.first($('#scroll-foodcategory').find('.active')))) {
                    var navlinkId = _.first($('#scroll-foodcategory').find('.active')).hash;
                    var foodCatId = navlinkId.substr(navlinkId.lastIndexOf("_") + 1);
                    //if (vmViewIndex.menu.dropdownScrollFoodCategory().value() != foodCatId) { //Modified and End by SMILEDINING-SA22-0001#22
                    if (vmViewIndex.menu.dropdownScrollFoodCategory().value() != parseInt(foodCatId)) {   //Added and End by SMILEDINING-SA22-0001#22
                        vmViewIndex.menu.dropdownScrollFoodCategory().value(parseInt(foodCatId));
                    }
                }
                //End Added by SMILEDINING-SA18-0017
                //Added by SMILEDINING-SA22-0001#22
                if (isEmpty(_.first($('#scroll-foodcategory').find('.active')))) {
                    $('#scroll-foodcategory').find('li a:eq(0)').addClass('active');
                }
                //End Added by SMILEDINING-SA22-0001#22
            }

            if (scroll > 300) {
                $('.backToTop').addClass('show');
                $('.footer-nav').removeClass('d-none');   //Added and End by SMILEDINING-SA18-0019
            } else {
                $('.backToTop').removeClass('show');
                $('.footer-nav').addClass('d-none');   //Added and End by SMILEDINING-SA18-0019
            }
        });
        $('#scroll-foodcategory').find('li a:eq(0)').addClass('active');    //Default fist element        

        /*Mask*/
        //$('.mask-phone').inputmask({
        //    mask: '(999) 999-9999'
        //});

        //setMaskPhone();   //Modifeid and End by SMILEDINING-SA21-0015
        //setMaskPhone2();    //Added and End by SMILEDINING-SA21-0015 //Modified and End by SMILEDINING-SA21-0074

        $('.mask-expiry').inputmask({
            mask: '99/9999'
        });

        /*Geo location*/
        setGeoLocation();

        setBlockEmoji(); //Added and End by SMILEDINING-SA21-0069

        /*Touch Swipe*/
        $('.touch').swipe({
            swipeLeft: function () {
                //Modified by SMILEDINING-SA20-0045
                //var leftPos = $('.touch-slide').scrollLeft();
                //$('.touch-slide').animate({ scrollLeft: leftPos + 200 }, 300);       
                //End Modified by SMILEDINING-SA20-0045
                slideRight();   //Added and End by SMILEDINING-SA20-0045
            },
            swipeRight: function () {
                //Modified by SMILEDINING-SA20-0045
                //var leftPos = $('.touch-slide').scrollLeft();
                //$('.touch-slide').animate({ scrollLeft: leftPos - 200 }, 300);
                //End Modified by SMILEDINING-SA20-0045
                slideLeft();    //Added and End by SMILEDINING-SA20-0045
            },
            allowPageScroll: 'horizontal',
            preventDefaultEvents: false
        });

        $('.slide-left').click(function () {
            slideLeft();
        });

        $('.slide-right').click(function () {
            slideRight();
        });

        //Added by SMILEDINING-SA21-0027#5
        $('#modalFood').on('hidden.bs.modal', function () {
            $('#modalFood .text-more').removeClass('d-none');
            $('#modalFood .text-less').addClass('d-none');
            //Added by SMILEDINING-SA21-0027#7
            vmViewIndex.currentFood.listIconTop([]);
            vmViewIndex.currentFood.listIconBottom([]);
            //End Added by SMILEDINING-SA21-0027#7
            //vmViewIndex.currentFood.food.listIconBottom([]); //Modified and End by SMILEDINING-SA21-0027#6
        });
        //End Added by SMILEDINING-SA21-0027#5

        //Added by WEB-SA23-0042
        $('#modalFood').on('shown.bs.modal', function (e) {
            vmViewIndex.currentFood.checkVisibleBtnMoreIcon();
        });
        //End Added by WEB-SA23-0042

        //Added by WEB-SA23-0051
        $('#modalCaptchaRegister').on('hidden.bs.modal', function (e) {
            resetUrlFromRegister();
        });
        //End Added by WEB-SA23-0051

        //Modified by SMILEDINING-SA18-0006
        /*Force Backgroud Color FoodSet*/
        //$('.touch-slide').find('radio:eq(0)').prop('checked', true);
        //$('.touch-slide').find('label:eq(0)').addClass('theme default-background-color-dark force'); 
        //End Modified by SMILEDINING-SA18-0006

        //Force click foodset default
        $(vmViewIndex.menu.currentFoodSet).click(); //Added and End by SMILEDINING-SA18-0006

        /*Validation*/
        $('form').bind("invalid-form.validate", onValidationHandler);
        function onValidationHandler(form, validator) {
            if (validator.errorList.length > 0) {
                $(document).find('#' + form.target.id + ' .panel-messsage-error').show();
            }
        };

        //Protobuf & Signalr
        if (typeof dcodeIO === 'undefined' || !dcodeIO.ProtoBuf) {
            throw (new Error("ProtoBuf.js is not present. Please see www/index.html for manual setup instructions."));
        }

        try {

            $.connection.hub.url = cGlobal_url;
            $.connection.hub.qs = { 'groupId': vmViewIndex.globalConfig.shopCode(), 'application': cGlobal_application };
            //$.connection.hub.start({ transport: ['webSockets', 'longPolling'] })

            //Added by SMILEDINING-SA17-0030
            //$.connection.checkout.client.returnIncompleteSendOrder = function (ticketId) {    //Modified and End by SMILEDINING-SA18-0008
            //Modified by SMILEDINING-SA22-0001
            //$.connection.checkout.client.returnIncompleteSendOrder = function (groupId, ticketId) {     //Added and End by SMILEDINING-SA18-0008
            //    getObjFormAjax(cJsonSendFail, ticketId);
            //};
            ////End Added by SMILEDINING-SA17-0030
            //End Modified by SMILEDINING-SA22-0001

            $.connection.hub.start({ transport: ['longPolling'] })
                .done(function () {
                    _signalConnect = true;
                    console.log('connection started!');
                })
                .fail(function () {
                    _signalConnect = false;
                    console.log('Could not Connect!');
                });

            $.connection.hub.disconnected(function () {
                setTimeout(function () {
                    $.connection.hub.start();
                }, 5000); // Restart connection after 5 seconds.
            });

            $.connection.hub.stateChanged(function (change) {
                if (change.newState === $.signalR.connectionState.reconnecting) {
                    _signalConnect = false;
                    console.log('Server is unreachable, trying to reconnect...');
                }
                else if (change.newState === $.signalR.connectionState.connected) {
                    _signalConnect = true;
                    console.log('Server reconnected, reinitialize');
                }
            });

        } catch (e) {
            location.href = serverMaintenance;
        }

        //Loading Success
        setTimeout(function () {
            $('body').removeClass('loading'); //Added and End by SMILEDINING-SA22-0001
            $('body').addClass('loaded');
            $('.viewLoading').removeClass('gb_hidden');

            //Added by WEB-SA23-0051
            if (!isEmpty(varAuthenticated)) {
                resetUrlFromRegister();
            }
            else if (window.location.pathname.toLowerCase().includes('register')) { 
                if (checkMobileForResolution()) {
                    vmViewIndex.mobile.forceClickRegister(true);
                    $('.ssm-toggle-nav').click();
                    $('#mobile-menu-register').click();
                } else {
                    $('#modalCaptchaRegister').modal('show');
                }
                return;
            }
            //End Added by WEB-SA23-0051

            //Added by WEB-SA23-0030#1
            if (vmViewIndex.dining.isForceChangeToCheckoutComplete()) {
                forceChangeToCheckoutComplete();
                return;
            }
            //End Added by WEB-SA23-0030#1
            
            setFoodSetAutohide(vmViewIndex.menu.currentDate()); //Added and End by WEB-SA22-0068            
            //Show Reset Modal
            if (varShowResetPassswordForm) {
                $('#modalResetPassword').modal({ backdrop: 'static', keyboard: false });
                $('#modalResetPassword').modal('hide');
                $('#modalResetPassword').modal('show');
            }
            else { //Added and End by WEB-SA23-0042
                //Added by SMILEDINING-SA21-0064
                if (varConfirmAccount) {
                    vmViewIndex.loading.loadingVisible(true);
                    callBackAccountConfirm(varConfirmToken, true);
                } else if (varDeleteAccount) {
                    vmViewIndex.loading.loadingVisible(true);
                    callBackAccountConfirm(varConfirmToken, false);
                }
                //End Added by SMILEDINING-SA21-0064

                var ie = checkVersionIE();
                if (!isEmpty(ie)) {
                    if (ie < 11) {
                        $('#browserVerionModel').modal('show');
                    }
                }
            //Added by WEB-SA23-0042
                checkTimeAfterLoadingSuccess();
            }
            //End Added by WEB-SA23-0042
            //Modified by WEB-SA23-0042
            //var time = _currentTime.clone();    //Added and End by SMILEDINING-SA20-0031

            ////Modified by SMILEDINING-SA20-0038#1
            ////if (!vmViewIndex.globalConfig.shopOpen()) {
            ////    $('#modalShopClose').modal('show');
            ////}
            ////End Modified by SMILEDINING-SA20-0038#1
            ////Added by SMILEDINING-SA20-0038#2
            //if (!vmViewIndex.globalConfig.shopStatus()) {
            //    $('#modalShopClose').modal('show');
            //}
            ////End Added by SMILEDINING-SA20-0038#2
            ////Added by SMILEDINING-SA20-0038#1
            ////if (vmViewIndex.globalConfig.timemenuinit() == cCustom) {     //Modified and End by SMILEDINING-SA20-0038#2
            //else if (vmViewIndex.globalConfig.timemenuinit() == cCustom) {  //Added and End by SMILEDINING-SA20-0038#2
            //    //var advanceDateTime = getCustomDateTime(_currentTime, vmViewIndex.globalConfig.timeMenuCustomDay(), vmViewIndex.globalConfig.timeMenuCustomHour());       //Modified and by SMILEDINING-SA20-0031#5
            //    var advanceDateTime = vmViewIndex.menu.currentDate().clone();   //Added and End by SMILEDINING-SA20-0031#5
            //    if (checkHoliday(advanceDateTime)) {
            //        $('#modalShopClose').modal('show');
            //    }
            //    //if (checkShopClose(advanceDateTime)) {    //Modified and End by SMILEDINING-SA20-0031
            //    else if (checkShopClose(advanceDateTime)) { //Added and End by SMILEDINING-SA20-0031
            //        $('#modalShopClose').modal('show');
            //    }
            //    //Added by SMILEDINING-SA20-0031
            //    else if (checkPeriodShopClose(advanceDateTime)) {
            //        $('#modalShopClose').modal('show');
            //    }
            //    time = advanceDateTime;
            //    //End Added by SMILEDINING-SA20-0031
            //    setPickupAndDeliveryTime(advanceDateTime);
            //}
            ////End Added by SMILEDINING-SA20-0038#1

            ////Added by SMILEDINING-SA17-0028
            //else {
            //    if (checkHoliday(_currentTime)) {
            //        $('#modalShopClose').modal('show');
            //    }
            //    //Added by SMILEDINING-SA17-0029
            //    //if (checkShopClose(_currentTime)) {       //Modified and End by SMILEDINING-SA20-0031
            //    else if (checkShopClose(_currentTime)) {     //Added and End by SMILEDINING-SA20-0031
            //        $('#modalShopClose').modal('show');
            //    }
            //    //End Added by SMILEDINING-SA17-0029
            //    //Added by SMILEDINING-SA20-0031
            //    else if (checkPeriodShopClose(_currentTime)) {
            //        $('#modalShopClose').modal('show');
            //    }
            //    //End Added by SMILEDINING-SA20-0031
            //    //setPickupAndDeliveryTime(); //Added and End by SMILEDINING-SA20-0038#1    //Modified and End by SMILEDINING-SA20-0031#2
            //    setPickupAndDeliveryTime(_currentTime); //Added and End by SMILEDINING-SA20-0031#2
            //}
            ////End Added by SMILEDINING-SA17-0028
            //End Modified by WEB-SA23-0042

            hasDropDownScroll();   //Added and End by SMILEDINING-SA18-0017

            //checkSizeShopNameWidth(0, 0, 0, true); //Added and End by SMILEDINING-SA18-0036   /Modified and end by SMILEDINING-SA18-0045

            //Modified by SMILEDINING-SA21-0027#2
            ////Added by SMILEDINING-SA18-0045
            //if ($(window).width() + 17 < 576) {
            //    checkSizeShopNameWidth(0, 0, 0, true, 'mobile');
            //}
            //else if ($(window).width() + 17 < 768) {
            //    checkSizeShopNameWidth(0, 0, 0, true, 'tablet');
            //}
            ////End Added by SMILEDINING-SA18-0045
            //End Modified by SMILEDINING-SA21-0027#2

            //Added by SMILEDINING-SA19-0004
            //if (getShowActive()) {    //Modified and End by SMILEDINING-SA20-0031
            //Modified by WEB-SA23-0042
            //if (getShowActive(time)) {  //Added and End by SMILEDINING-SA20-0031
            //    //Added by SMILEDINING-SA20-0004
            //    //if (vmViewIndex.globalConfig.timemenuinit() !== cASAP) {      //Modified and End by SMILEDINING-SA20-0013
            //    if (vmViewIndex.globalConfig.timemenuinit() !== cASAP && vmViewIndex.globalConfig.timemenuinit() !== cASAPOnly) {   //Added and End by SMILEDINING-SA20-0013
            //        $('#modalSelectDateTime').modal('show');
            //    } else {
            //        if (!varShowResetPassswordForm) {
            //            //Modified by SMILEDINING-SA20-0028
            //            //$('#modalAnnounce').modal('show');
            //            //showAnnounce = true;
            //            //End Modified by SMILEDINING-SA20-0028
            //            customAnnouncement();  //Added and End by SMILEDINING-SA20-0028       
            //        }
            //    }
            //    //End Added by SMILEDINING-SA20-0004
            //    //$('#modalAnnounce').modal('show');    //Modified and End by SMILEDINING-SA20-0004
            //}
            //End Modified by WEB-SA23-0042
            //Added by  SMILEDINING-SA20-0004
            $('#modalSelectDateTime').on('shown.bs.modal', function () {
                disableScrollWhenModalShow(true);
            });

            $('#modalSelectDateTime').on('hidden.bs.modal', function () {
                if (!varShowResetPassswordForm) {
                    //Modified by SMILEDINING-SA20-0028
                    //if (!showAnnounce) {
                    //     $('#modalAnnounce').modal('show'); 
                    //     showAnnounce = true;
                    //}
                    //End Modified by SMILEDINING-SA20-0028
                    customAnnouncement();  //Added and End by SMILEDINING-SA20-0028                
                }
                disableScrollWhenModalShow(false);
            });
            //End Added by  SMILEDINING-SA20-0004
            //End Added by SMILEDINING-SA19-0004
            checkAuthenticationExpiration(); //Added and End by WEB-SA23-0034#2
            //}, 1000); //Modified and End by SMILEDINING-SA22-0001#12
        }, 0);   //Added and End by SMILEDINING-SA22-0001#12

        setUpKeepAlive();       //Added and End by SMILECONTACTLESS-SA20-0001

        //Added by WEB-SA23-0042
        function checkTimeAfterLoadingSuccess() {
            var time = _currentTime.clone();
            if (!vmViewIndex.globalConfig.shopStatus()) {
                $('#modalShopClose').modal('show');
            } else if (vmViewIndex.globalConfig.timemenuinit() == cCustom) {
                var advanceDateTime = vmViewIndex.menu.currentDate().clone();
                if (checkHoliday(advanceDateTime)) {
                    $('#modalShopClose').modal('show');
                }
                else if (checkShopClose(advanceDateTime)) {
                    $('#modalShopClose').modal('show');
                }
                else if (checkPeriodShopClose(advanceDateTime)) {
                    $('#modalShopClose').modal('show');
                }
                time = advanceDateTime;
                setPickupAndDeliveryTime(advanceDateTime);
            } else {
                if (checkHoliday(_currentTime)) {
                    $('#modalShopClose').modal('show');
                }
                else if (checkShopClose(_currentTime)) {
                    $('#modalShopClose').modal('show');
                }
                else if (checkPeriodShopClose(_currentTime)) {
                    $('#modalShopClose').modal('show');
                }
                else if (getShowActive(time)) {
                    if (vmViewIndex.globalConfig.timemenuinit() !== cASAP && vmViewIndex.globalConfig.timemenuinit() !== cASAPOnly) {
                        $('#modalSelectDateTime').modal('show');
                    } else {
                        if (!varShowResetPassswordForm) {
                            customAnnouncement();
                        }
                    }
                }
                setPickupAndDeliveryTime(_currentTime);
            }
        };
        //End Added by WEB-SA23-0042
        //Added by SMILEDINING-SA20-0028  
        function customAnnouncement() {
            if (convertStrToBool(vmViewIndex.globalConfig.shopActive())) {
                $('#modalAnnounce').modal('show');
                showAnnounce = true;
            }

            if (convertStrToBool(vmViewIndex.globalConfig.shopAnnounceCustomActive()) && vmViewIndex.globalConfig.shopAnnounceCustomImage().length > 0) {
                $('#popup-announcement-custom').prop('href', vmViewIndex.globalConfig.shopAnnounceCustomImage())
                $('#popup-announcement-custom img').prop('src', vmViewIndex.globalConfig.shopAnnounceCustomImage())
                $('#popup-announcement-custom').trigger('click');
                showAnnounceCustom = true;
            }
        };
        //End Added by SMILEDINING-SA20-0028  

        //Modified by SMILEDINING-SA20-0031
        //// Added by SMILEDINING-SA19-0004
        //function getShowActive() {
        //    //if ((vmViewIndex.globalConfig.shopActive() == '1') && (vmViewIndex.globalConfig.shopOpen()) && (!checkHoliday(_currentTime)) && (!checkShopClose(_currentTime)))      //Modified and End by SMILEDINING-SA20-0028
        //    //Added by SMILEDINING-SA20-0028
        //    if (((vmViewIndex.globalConfig.shopActive() == '1') || (vmViewIndex.globalConfig.shopAnnounceCustomActive() == '1'))
        //    && (vmViewIndex.globalConfig.shopOpen())
        //    && (!checkHoliday(_currentTime))
        //    && (!checkShopClose(_currentTime))
        //        )
        //        //End Added by SMILEDINING-SA20-0028
        //        return true;
        //    else
        //        return false;
        //}
        //// End Added by SMILEDINING-SA19-0004
        //End Modified by SMILEDINING-SA20-0031

        //Added by SMILEDINING-SA20-0031
        function getShowActive(time) {
            if (((vmViewIndex.globalConfig.shopActive() == '1') || (vmViewIndex.globalConfig.shopAnnounceCustomActive() == '1')) && (vmViewIndex.globalConfig.shopOpen()) && (!checkHoliday(time)) && (!checkShopClose(time)) && (!checkPeriodShopClose(time)))
                return true;
            else
                return false;
        }
        //End Added by SMILEDINING-SA20-0031

        function afterSubmitForm(frmName, result) {
            switch (frmName) {
                case cfrmLogIn:
                case cfrmRegister:
                    try {   //Added and End by SMILEDINING-SA22-0001#37
                        //Added by KENG
                        const isModalCaptchaLogin = $('#modalCaptchaLogin').is(':visible');
                        if (isModalCaptchaLogin) {
                            $('#modalCaptchaLogin').modal('hide');
                        }

                        const isModalCapchaRegister = $('#modalCaptchaRegister').is(':visible');
                        if (isModalCapchaRegister) {
                            $('#modalCaptchaRegister').modal('hide');
                        }
                        //End Added by KENG
                        //Added by SMILEDINING-SA22-0001#52
                        if (result.obj == 'login') {
                            vmViewIndex.checkout.clickLogIn();
                        }
                        else {
                            //End Added by SMILEDINING-SA22-0001#52
                            ko.mapping.fromJSON(result.obj, {}, vmViewIndex.customer);
                            vmViewIndex.customer.mapProfileUpdate(); //Added and End by WEB-SA23-0040#2
                            //Modified by WEB-SA23-0040#2
                            ////Added by WEB-SA23-0040#1
                            //vmViewIndex.customer.profileUpdate.firstName(vmViewIndex.customer.firstName());
                            //vmViewIndex.customer.profileUpdate.lastName(vmViewIndex.customer.lastName());
                            //vmViewIndex.customer.profileUpdate.ownerPhone(vmViewIndex.customer.ownerPhone());
                            ////End Added by WEB-SA23-0040#1
                            //End Modified by WEB-SA23-0040#2
                            //Added by SMILEDINING-SA22-0001#23
                            var token = getCustomerObjFormAjax(cJsonGetHeaderToken);
                            if (token != null) {
                                var headerToken = JSON.parse(token)
                                $('#divVarHeader').val(headerToken);
                            }
                            //End Added by SMILEDINING-SA22-0001#23
                            var customerAddress = getCustomerObjFormAjax(cJsonGetCustomerAddress, vmViewIndex.customer.customerId());
                            if (customerAddress != null) {
                                var data = JSON.parse(customerAddress);
                                for (var i = 0; i < data.length; i++) {
                                    vmViewIndex.customerAddress.multiViewOptions.dataSource.push(data[i]);
                                }
                                vmViewIndex.customerAddress.itemCount(data.length);
                                if (data.length > 0) {
                                    //Modified by SMILEDINING-SA22-0001#39
                                    //setCurrentCustomerAddress();
                                    //vmViewIndex.customerAddress.showItem(true);
                                    //End Modified by SMILEDINING-SA22-0001#39
                                    //Added by SMILEDINING-SA22-0001#7
                                    var index = _.findIndex(vmViewIndex.customerAddress.multiViewOptions.dataSource(), function (item) { return item.isDefault == true; });
                                    if (index != -1) vmViewIndex.customerAddress.selectedIndex(index);
                                    //End Added by SMILEDINING-SA22-0001#7
                                    //Added by SMILEDINING-SA22-0001#39
                                    setCurrentCustomerAddress();
                                    vmViewIndex.customerAddress.showItem(true);
                                    //End Added by SMILEDINING-SA22-0001#39
                                } else {
                                    resetCurrentCustomerAddress();
                                    vmViewIndex.customerAddress.showItem(false);
                                }
                                setCurrentPhone();
                            }

                            //Added by SMILEDINING-SA19-0014
                            var customerAddressBilling = getCustomerObjFormAjax(cJsonGetCustomerAddressBilling, vmViewIndex.customer.customerId());
                            if (!(isEmpty(customerAddressBilling) || customerAddressBilling == "null")) {
                                var customerAddressBillingData = new CustomerAddressBillingCurrentViewModel(JSON.stringify(JSON.parse(customerAddressBilling)));
                                vmViewIndex.cart.ccBillingAddress(customerAddressBillingData.address());
                                vmViewIndex.cart.billingAddressLatitude(customerAddressBillingData.latitude());
                                vmViewIndex.cart.billingAddressLongitude(customerAddressBillingData.longitude());
                                vmViewIndex.cart.billingAddressCity(customerAddressBillingData.city());
                                vmViewIndex.cart.billingAddressSubCity('');
                                vmViewIndex.cart.billingAddressState(customerAddressBillingData.state());
                                vmViewIndex.cart.ccBillingZip(customerAddressBillingData.postTal());
                            }
                            /*if (!isEmpty(customerAddressBilling)) {*/ //Modified and End by SMILEDINING-SA22-0001#5
                            //Modified by WEB-SA23-0036
                            //if (!isEmpty(vmViewIndex.customer.customerId())) {   //Added and End by SMILEDINING-SA22-0001#5
                            //    vmViewIndex.cart.showBillingAddress(true);
                            //}
                            //End Modified by WEB-SA23-0036
                            //End Added by SMILEDINING-SA19-0014

                            //Added by SMILEDINING-SA18-0005
                            //Modified by SMILEDINING-SA22-0001
                            //var orderHistory = getCustomerObjFormAjax(cJsonGetOrderHistory, vmViewIndex.customer.customerId()); 
                            //if (orderHistory != null && orderHistory.length > 0) {
                            //    var dataOrderHistory = JSON.parse(orderHistory);
                            //    OrderHistoryViewModel(dataOrderHistory);
                            //}
                            ////End Added by SMILEDINING-SA18-0005
                            //End Modified by SMILEDINING-SA22-0001
                            //Added by SMILEDINING-SA22-0001
                            var orderHistory = getOrderHistoryFormAjax(cJsonGetOrderHistory, vmViewIndex.customer.customerId());
                            var orderHistoryData = JSON.parse(orderHistory.obj);
                            var orderHistoryDate = JSON.parse(orderHistory.dataDate);
                            DataOrderHistoryViewModel(orderHistoryData, orderHistoryDate);
                            //End Added by SMILEDINING-SA22-0001
                            //Added by WEB-SA23-0041
                            var dataCustomerPrivilege = getCustomerObjFormAjax(cJsonGetCustomerPrivilege, vmViewIndex.customer.customerId());
                            vmViewIndex.customerPrivilege.checkDataMemberDiscount(dataCustomerPrivilege, vmViewIndex.customer);
                            //End Added by WEB-SA23-0041

                            vmViewIndex.desktop.logInSuccessed(true);
                            vmViewIndex.mobile.logInSuccessed(true);

                            if (vmViewIndex.checkout.step() == 0) {
                                vmViewIndex.showMobile(false);
                                vmViewIndex.showMenu(true);
                                vmViewIndex.showFormCheckOut(false);
                            } else {
                                vmViewIndex.showMobile(false);
                                vmViewIndex.showMenu(false);
                                vmViewIndex.showFormCheckOut(true);
                                setGeoLocation();
                            }

                            if (frmName == cfrmLogIn) {
                                $('.popover-login').popover('hide');
                            } else {
                                $('.popover-register').popover('hide');
                            }

                            checkAuthenticationExpiration(); //Added and End by WEB-SA23-0034#2
                        }   //Added and End by SMILEDINING-SA22-0001#52
                        //Added by SMILEDINING-SA22-0001#37
                    }
                    catch (err) {
                        //logErrorJavaScript(err, 'home-index.js/cfrmRegister', 1243, true); //Modified and End by WEB-SA22-0067#2
                        logErrorJavaScript(err, 'home-index.js/cfrmRegister', getErrorLine(err), true); //Added and End by WEB-SA22-0067#2
                    }
                    //End Added by SMILEDINING-SA22-0001#37
                    break;
                case cfrmLogOff:
                    location.replace(result.url);
                    break;
                case cfrmForgotPassword:
                    $('#modalForgotPassword').modal('hide');
                    break;
                case cfrmResetPassword:
                    $('#modalResetPassword').modal('hide');
                    checkTimeAfterLoadingSuccess(); //Added and End by WEB-SA23-0042
                    break;
                case cfrmCustomerProfileUpdate:
                    //Added by WEB-SA23-0040#1
                    vmViewIndex.customer.firstName(vmViewIndex.customer.profileUpdate.firstName());
                    vmViewIndex.customer.lastName(vmViewIndex.customer.profileUpdate.lastName());
                    vmViewIndex.customer.ownerPhone(vmViewIndex.customer.profileUpdate.ownerPhone());
                    //End Added by WEB-SA23-0040#1
                    //Added by WEB-SA23-0042
                    if (vmViewIndex.customer.isClickEditProfileMobile()) {
                        vmViewIndex.event.checkout();
                    }
                    //End Added by WEB-SA23-0042
                    break;
                case cfrmChangePassword:
                    vmViewIndex.changePassword.oldPassword('');
                    vmViewIndex.changePassword.newPassword('');
                    vmViewIndex.changePassword.confirmPassword('');
                    break;
                case cfrmCustomerAddressAdd:
                case cfrmCustomerAddressUpdate:
                    vmViewIndex.customerAddress.multiViewOptions.dataSource.removeAll();
                    var data = JSON.parse(result.obj);
                    var selectedId = vmViewIndex.customerAddress.currentModel.customerAddresId();   //Added and End by SMILEDINING-SA22-0001#51
                    for (var i = 0; i < data.length; i++) {
                        vmViewIndex.customerAddress.multiViewOptions.dataSource.push(data[i]);
                    }
                    vmViewIndex.customerAddress.itemCount(data.length);
                    if (data.length > 0) {
                        vmViewIndex.customerAddress.showItem(true);
                    } else {
                        vmViewIndex.customerAddress.showItem(false);
                    }


                    //if (frmName == cfrmCustomerAddressAdd) {  //Modified and End by SMILEDINING-SA18-0025
                    if (frmName == cfrmCustomerAddressAdd || frmName == cfrmCustomerAddressUpdate) { //Add and End by SMILEDINING-SA18-0025
                        vmViewIndex.customerAddress.showAdd(false);
                        vmViewIndex.customerAddress.showUpdate(false);
                        vmViewIndex.customerAddress.show(true);
                        //Added by SMILEDINING-SA22-0001#7
                        if (frmName == cfrmCustomerAddressAdd) {
                            vmViewIndex.customerAddress.selectedIndex(data.length - 1);
                        }
                        if (frmName == cfrmCustomerAddressUpdate) {
                            //var index = _.findIndex(vmViewIndex.customerAddress.multiViewOptions.dataSource(), function (item) { return item.customerAddresId == vmViewIndex.customerAddress.currentModel.customerAddresId(); }); //Modified and End by SMILEDINING-SA22-0001#51
                            var index = _.findIndex(vmViewIndex.customerAddress.multiViewOptions.dataSource(), function (item) { return item.customerAddresId == selectedId; });   //Added and End by SMILEDINING-SA22-0001#51
                            if (index != -1) vmViewIndex.customerAddress.selectedIndex(index);
                        }
                        //End Added by SMILEDINING-SA22-0001#7
                    }

                    setCurrentCustomerAddress();
                    setCurrentPhone();
                    vmViewIndex.customerAddress.disableZipCode(false); //Added and End by SMILEDINING-SA22-0012#5
                    break;
                //Modified by SMILEDINING-SA22-0001
                //case cfrmPayOrder:
                //    vmViewIndex.checkout.step(3);
                //    $('#checkout-order').removeClass('active');
                //    $('a[href="#checkout-order"]').removeClass('active');

                //    $('#checkout-payment').addClass('active');
                //    $('a[href="#checkout-payment"]').addClass('active');

                //    vmViewIndex.checkout.forcePayOrder(false);  //Added and End by SMILEDINING-SA21-0079
                //    setScrollTop();
                //    break;
                //End Modified by SMILEDINING-SA22-0001
                case cfrmDiscount:
                    var data = JSON.parse(result.obj);
                    //var valueDiscount = 0;
                    //setDiscount(data);    //Modified and End By SMILEDINING-SA19-0008
                    //Added By SMILEDINING-SA19-0008
                    if (data.couponDeliveryCode == undefined) {
                        setDiscount(data);
                        vmViewIndex.cart.isCouponCodeApply(true); //Added and End by WEB-SA23-0041
                    } else {
                        setCouponDelivery(data);
                    }
                    //End Added By SMILEDINING-SA19-0008 
                    break;
                //case cfrmConfirmPayment:
                //    vmViewIndex.checkout.step(4);
                //    $('#checkout-payment').removeClass('active');
                //    $('a[href="#checkout-payment"]').removeClass('active');

                //    $('#checkout-complete').addClass('active');
                //    $('a[href="#checkout-complete"]').addClass('active');
                //    break;
                //Added by SMILEDINING-SA18-0005
                case cfrmSearchOrderHistory:
                    //Modified by SMILEDINING-SA21-0001
                    //var dataHisotry = JSON.parse(result.obj);
                    //DataOrderHistoryViewModel(dataHisotry);
                    //End Modified by SMILEDINING-SA21-0001
                    //Added by SMILEDINING-SA21-0001
                    var orderHistoryData = JSON.parse(result.obj);
                    var orderHistoryDate = JSON.parse(result.dataDate);
                    DataOrderHistoryViewModel(orderHistoryData, orderHistoryDate);
                    //End Added by SMILEDINING-SA21-0001
                    vmViewIndex.orderHistory.clearTreeListOrderHistory();
                    break;
                //End Added by SMILEDINING-SA18-0005
                //Added by SMILEDINING-SA20-0004
                case cfrmGuestLogin:
                    //Added by SMILEDINING-SA22-0001#23
                    var token = getCustomerObjFormAjax(cJsonGetHeaderToken);
                    if (token != null) {
                        var headerToken = JSON.parse(token)
                        $('#divVarHeader').val(headerToken);
                    }
                    //End Added by SMILEDINING-SA22-0001#23
                    //Added by KENG
                    const isModalCapchaGuest = $('#modalCaptchaGuest').is(':visible');
                    if (isModalCapchaGuest) {
                        $('#modalCaptchaGuest').modal('hide');
                    }
                    //End Added by KENG

                    afterSubmitGuest(result);
                case cfrmGuestLoginUpdate:
                    afterSubmitGuest(result);
                    break;
                //End Added by SMILEDINING-SA20-0004
                default:
                    break;
            }
            $('body').removeAttr('style'); //Added and End by WEB-SA23-0039
        };

        //Added by SMILEDINING-SA20-0004
        function afterSubmitGuest(result) {
            ko.mapping.fromJSON(result.obj, {}, vmViewIndex.guestLogin);
            if (vmViewIndex.cart.shipmentType() == 'DELIVERY') {
                if (vmViewIndex.guestLogin.latitude().length > 0 && vmViewIndex.guestLogin.latitude().length > 0) {
                    vmViewIndex.guestLogin.isAddressAfterSave(true);
                }
            }

            if (vmViewIndex.guestLogin.guestId().length > 0) {
                //vmViewIndex.checkout.clickNextUser();
                vmViewIndex.checkout.submitNextUser();
            }
        };
        //End Added by SMILEDINING-SA20-0004
        //Modified by SMILEDINING-SA22-00021
        //function getCustomerObjFormAjax(jsonObj, id) {
        //    var objUrl = new ObjUrl(jsonObj);
        //    var requestUrl = objUrl.getUrlFromJson();
        //    var passData = JSON.parse('{"key" : "' + id + '"}');
        //    //return getJsonFromAjax(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout);  //Modified and End by SMILEDINING-SA22-0001#23
        //    return getJsonFromAjaxAddHeader(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout, token());  //Added and End by SMILEDINING-SA22-0001#23
        //};
        //End Modified by SMILEDINING-SA22-00021
        //Modified by SMILEDINING-SA22-0001#24
        ////Added by SMILEDINING-SA22-0001#23
        //function getJsonFromAjaxAddHeader(url, async, cache, type, data, timeout, tokenHeaderValue) {
        //    var obj;
        //    var ajaxForm = $.ajax({
        //        url: url,
        //        async: async,
        //        cache: cache,
        //        type: type,
        //        data: data,
        //        timeout: timeout, // timeout after 60 seconds
        //        headers: {
        //            'RequestVerificationToken': tokenHeaderValue
        //        }
        //    });

        //    ajaxForm.done(function (result) {
        //        obj = result.obj;
        //    });

        //    ajaxForm.fail(function (result) {
        //        obj = null;
        //    });

        //    return obj;
        //};
        ////End Added by SMILEDINING-SA22-0001#23
        //End Modified by SMILEDINING-SA22-0001#24
        //Modified by SMILEDINING-SA22-00021
        //Added by SMILEDINING-SA22-0001
        //function getOrderHistoryFormAjax(jsonObj, id) {
        //    var resultData;
        //    var objUrl = new ObjUrl(jsonObj);
        //    var requestUrl = objUrl.getUrlFromJson();
        //    var passData = JSON.parse('{"key" : "' + id + '"}');
        //    var ajaxForm = $.ajax({
        //        url: requestUrl,
        //        async: !ajax_async,
        //        cache: ajax_cache,
        //        type: ajax_type_post,
        //        data: passData,
        //        timeout: ajax_timeout, // timeout after 60 seconds
        //        //Added by SMILEDINING-SA22-0001#23
        //        headers: {
        //            'RequestVerificationToken': token()
        //        }
        //        //End Added by SMILEDINING-SA22-0001#23
        //    });

        //    ajaxForm.done(function (result) {
        //        resultData = result;
        //    });

        //    ajaxForm.fail(function (result) {
        //        resultData = null;
        //    });

        //    return resultData;
        //};
        //End Added by SMILEDINING-SA22-0001
        //End Modified by SMILEDINING-SA22-00021
        function slideLeft() {
            var leftPos = $('.touch-slide').scrollLeft();
            //$('.touch-slide').animate({ scrollLeft: leftPos - 200 }, 300);    //Modified and End by SMILEDINING-SA20-0045
            $('.touch-slide').animate({ scrollLeft: '-=' + 200 }, 300);     //Added and End by SMILEDINING-SA20-0045
        };

        function slideRight() {
            var leftPos = $('.touch-slide').scrollLeft();
            //$('.touch-slide').animate({ scrollLeft: leftPos + 200 }, 300);    //Modified and End by SMILEDINING-SA20-0045
            $('.touch-slide').animate({ scrollLeft: '+=' + 200 }, 300);     //Added and End by SMILEDINING-SA20-0045
        };

        function hasScroll() {
            if ($(document).height() > $(window).height()) {
                return true;
            }
            return false;
        };

        function updateTime() {
            //_currentTime.add(5, moment_minute);       //Modified by SMILEDINING-SA17-0001
            _currentTime.add(1, moment_minute);         //Added by SMILEDINING-SA17-0001
            //setPickupAndDeliveryTime();               //Modified and End by SMILEDINING-SA20-0020
            //setPickupAndDeliveryTime(vmViewIndex.menu.currentDate());   //Added and End by SMILEDINING-SA20-0020   //Modified and End by SMILEDINING-SA20-0031
            //setPickupAndDeliveryTime(_currentTime.clone()); //Added and End by SMILEDINING-SA20-0031      //Modified and End by SMILEDINING-SA20-0031#5
            //Added by SMILEDINING-SA20-0031#5
            if ((vmViewIndex.menu.currentDate()).isBefore(_currentTime.clone())) {
                setPickupAndDeliveryTime(_currentTime.clone());
                setFoodSetAutohide(_currentTime.clone()); //Added and End by WEB-SA22-0068
            } else {
                setPickupAndDeliveryTime(vmViewIndex.menu.currentDate());
                setFoodSetAutohide(vmViewIndex.menu.currentDate()); //Added and End by WEB-SA22-0068
            }
            //End Added by SMILEDINING-SA20-0031#5
            //Added by WEB-SA23-0033
            swalFoodSetBeforeTimeout();
            swalFoodSetTimeout(false);
            //End Added by WEB-SA23-0033
        };

        function setScaleCreditCardImage() {
            var width = $(window).width();
            if (width >= 576) {
                $('.jp-card-container').css({ transform: "scale(0.9)" });

            } else {
                $('.jp-card-container').css({ transform: "scale(0.5)" });

            }

            $('.tip .detail button').removeClass('btn-sm');
            $('.tip .detail button').removeClass('btn-md');
            if (width >= 768) {
                $('.tip .detail button').addClass('btn-md');
            } else {
                $('.tip .detail button').addClass('btn-sm');
            }

        };

        function toggleFoodCategory() {
            $('.footer-nav-trigger').toggleClass('menu-is-open');
            //we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
            mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');

        };

        //Modified by SMILEDINING-SA18-0045
        ////Added by SMILEDINING-SA18-0036
        ////shopname fontsize 
        //function checkSizeShopNameWidth(shopNameWidth, fontSize, navbarWidth, down) {
        //    if (navbarWidth == 0 && shopNameWidth == 0 && fontSize == 0) {
        //        navbarWidth = $('.nav-bar').outerWidth() - 97;
        //        shopNameWidth = $('.logo-mobile .navbar-brand p span').innerWidth();
        //        fontSize = $(".logo-mobile .navbar-brand p span").css('font-size').match(/\d+/) / 16;
        //    }
        //    var shopNameResize = $('.logo-mobile .navbar-brand p span');
        //    if (down) {
        //        if (shopNameWidth > navbarWidth) {
        //            fontSize = fontSize - 0.05;
        //            shopNameResize.css('font-size', fontSize + 'rem');
        //            shopNameWidth = $('.logo-mobile .navbar-brand p span').width();
        //            navbarWidth = $('.nav-bar').outerWidth() - 97;
        //            return checkSizeShopNameWidth(shopNameWidth, fontSize, navbarWidth, down);
        //        }
        //        else return;
        //    }
        //    else { 
        //        if (shopNameWidth + 10 < navbarWidth && fontSize <= 1.3) {
        //            fontSize = fontSize + 0.05;
        //            shopNameResize.css('font-size', fontSize + 'rem');
        //            shopNameWidth = $('.logo-mobile .navbar-brand p span').width();
        //            navbarWidth = $('.nav-bar').outerWidth() - 97;
        //            return checkSizeShopNameWidth(shopNameWidth, fontSize, navbarWidth, down);
        //        }
        //        else return;
        //    }
        //}
        ////End Added by SMILEDINING-SA18-0036
        //End Modified by SMILEDINING-SA18-0045

        //Added by SMILEDINING-SA18-0045
        //shopname fontsize 
        function checkSizeShopNameWidth(shopNameWidth, fontSize, navbarWidth, down, device) {
            var elementName = '';
            var fontSizeMax = 0;
            if (device == 'tablet') {
                elementName = '.menu-desktop .navbar-brand p';
                fontSizeMax = 1.3;
            }
            else {
                elementName = '.logo-mobile .navbar-brand p span';
                fontSizeMax = 1.3;
            }
            if (navbarWidth == 0 && shopNameWidth == 0 && fontSize == 0) {
                navbarWidth = device == 'tablet' ? 285 : $('.nav-bar').outerWidth() - 97;
                shopNameWidth = $(elementName).innerWidth();
                fontSize = parseInt($(elementName).css('font-size'), 10) / 16;
            }

            var shopNameResize = $(elementName);
            if (down) {
                if (shopNameWidth > navbarWidth) {
                    fontSize = fontSize - 0.05;
                    shopNameResize.css('font-size', fontSize + 'rem');
                    shopNameWidth = $(elementName).width();
                    navbarWidth = device == 'tablet' ? 285 : $('.nav-bar').outerWidth() - 97;
                    return checkSizeShopNameWidth(shopNameWidth, fontSize, navbarWidth, down, device);
                }
                else return;
            }
            else {
                if (shopNameWidth + 10 < navbarWidth && fontSize <= fontSizeMax) {
                    fontSize = fontSize + 0.05;
                    shopNameResize.css('font-size', fontSize + 'rem');
                    shopNameWidth = $(elementName).width();
                    navbarWidth = device == 'tablet' ? 285 : $('.nav-bar').outerWidth() - 97;
                    return checkSizeShopNameWidth(shopNameWidth, fontSize, navbarWidth, down, device);
                }
                else return;
            }
        }

        $('.orderHistoryFromDateBox .dx-texteditor-input').each(function (i, obj) {
            $(obj).attr('aria-label', 'From Date');
        });

        $('.orderHistoryEndDateBox .dx-texteditor-input').each(function (i, obj) {
            $(obj).attr('aria-label', 'End Date');
        });

        $('.menuHourDaySelectBox .dx-texteditor-input').attr('aria-label', 'Select Date');
        $('.menuHourTimeSelectBox .dx-texteditor-input').attr('aria-label', 'Select Time');
        $('.dropdownScrollFoodCategorySelectBox .dx-texteditor-input').attr('aria-label', 'Select Food Category');
        //End Added by SMILEDINING-SA18-0045

        //Added by SMILECONTACTLESS-SA20-0001
        function setUpKeepAlive() {
            var delay = (15) * 60 * 1000;
            setInterval(function () {
                getCustomerObjFormAjax(cJsonKeepSessionAlive, '')
            }, delay);
        };
        //End Added by SMILECONTACTLESS-SA20-0001
        eventModal();       //Added and End by KENG
        //Added by SMILEDINING-SA22-00021
    }
    function getCustomerObjFormAjax(jsonObj, id) {
        var objUrl = new ObjUrl(jsonObj);
        var requestUrl = objUrl.getUrlFromJson();
        var passData = JSON.parse('{"key" : "' + id + '"}');
        return getJsonFromAjaxAddHeader(requestUrl, !ajax_async, ajax_cache, ajax_type_post, passData, ajax_timeout, token());
    };
    function getOrderHistoryFormAjax(jsonObj, id) {
        var resultData;
        var objUrl = new ObjUrl(jsonObj);
        var requestUrl = objUrl.getUrlFromJson();
        var passData = JSON.parse('{"key" : "' + id + '"}');
        var ajaxForm = $.ajax({
            url: requestUrl,
            async: !ajax_async,
            cache: ajax_cache,
            type: ajax_type_post,
            data: passData,
            timeout: ajax_timeout, // timeout after 60 seconds
            headers: {
                'RequestVerificationToken': token()
            }
        });

        ajaxForm.done(function (result) {
            resultData = result;
        });

        ajaxForm.fail(function (result) {
            resultData = null;
        });

        return resultData;
    };
    //End Added by SMILEDINING-SA22-00021
});
