var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HMLiveBroadcast = /** @class */ (function (_super) {
    __extends(HMLiveBroadcast, _super);
    function HMLiveBroadcast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMLiveBroadcast.prototype.startLiveBroadcast = function (options, success, error) { return cordova(this, "startLiveBroadcast", {}, arguments); };
    HMLiveBroadcast.pluginName = "LiveBroadcast";
    HMLiveBroadcast.plugin = "cordova-plugin-live-broadcast";
    HMLiveBroadcast.pluginRef = "cordova.plugins.LiveBroadcast";
    HMLiveBroadcast.repo = "";
    HMLiveBroadcast.install = "ionic cordova plugin add cordova-plugin-live-broadcast";
    HMLiveBroadcast.installVariables = [];
    HMLiveBroadcast.platforms = ["Android", "iOS"];
    HMLiveBroadcast = __decorate([
        Injectable()
    ], HMLiveBroadcast);
    return HMLiveBroadcast;
}(IonicNativePlugin));
export { HMLiveBroadcast };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xpdmUtYnJvYWRjYXN0L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUlOLE1BQU0sb0JBQW9CLENBQUM7O0lBWVMsbUNBQWlCOzs7O0lBR3BELDRDQUFrQixhQUFDLE9BQStCLEVBQUUsT0FBOEIsRUFBRSxLQUEyQjs7Ozs7Ozs7SUFIcEcsZUFBZTtRQUQzQixVQUFVLEVBQUU7T0FDQSxlQUFlOzBCQWpCNUI7RUFpQnFDLGlCQUFpQjtTQUF6QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGx1Z2luLFxuICBDb3Jkb3ZhLFxuICBJb25pY05hdGl2ZVBsdWdpblxufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0xpdmVCcm9hZGNhc3QnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1saXZlLWJyb2FkY2FzdCcsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5MaXZlQnJvYWRjYXN0JyxcbiAgcmVwbzogJycsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tbGl2ZS1icm9hZGNhc3QnLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1MaXZlQnJvYWRjYXN0IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRMaXZlQnJvYWRjYXN0KG9wdGlvbnM6IEhNTGl2ZUJyb2FkY2FzdE9wdGlvbnMsIHN1Y2Nlc3M/OiBTdWNjZXNzQ2FsbGJhY2s8YW55PiwgZXJyb3IgPzogRXJyb3JDYWxsYmFjazxhbnk+KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhNTGl2ZUJyb2FkY2FzdE9wdGlvbnMge1xuICAvLyDmoIfpophcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG5lZWRUaXRsZT86IGJvb2xlYW47XG4gIC8vIOiHquWKqOaSreaUvlxuICBhdXRvUGxheT86IGJvb2xlYW47XG4gIC8vIDEg5bqU5oCl55u05pKtKOaOqOa1gSkgMiDnibnnuqfnm7Tmkq0o5Y+v5o6o5rWB77yM5Y+v5pKt5pS+KVxuICB0eXBlPzogbnVtYmVyO1xuICAvLyDmmK/lkKbmmK/op4LkvJdcbiAgaXNWaWV3ZXI/OiBib29sZWFuO1xuICAvLyDmkq3mlL7lnLDlnYBcbiAgcGxheVVybD86IHN0cmluZztcbiAgLy8g5o6o5rWB5Zyw5Z2AXG4gIHB1c2hVcmw/OiBzdHJpbmc7XG4gIC8vIOeUqOaIt+WQjSjnm7Tmkq3kuropXG4gIHVzZXJOYW1lPzogc3RyaW5nO1xuICAvLyDosIPor5UgKOW8gOWQr+iwg+ivleaooeW8j+WQju+8jOaJk+W8gOWPguaVsOiwg+ivleeVjOmdoilcbiAgZGVidWc/OiBib29sZWFuO1xuICAvLyDmkYTlg4/lpLQo6buY6K6k5ZCO572uKSAwIOWJjee9rlxuICBjYW1lcmFEZWZhdWx0PzogbnVtYmVyO1xuICAvLyDnoazop6PnoIEo6buY6K6k5byAKVxuICBkZWNvZGVEZWZhdWx0PzogYm9vbGVhbjtcbiAgLy8g6Ieq5Yqo5a+554SmKOm7mOiupOW8gClcbiAgZm9jdXNEZWZhdWx0PzogYm9vbGVhbjtcbiAgLy8g5YiG6L6o546HKOm7mOiupDcyMFApXG4gIHJlc29sdXRpb25EZWZhdWx0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBTdWNjZXNzQ2FsbGJhY2s8VD4gPSAocmVzdWx0PzogVCkgPT4gdm9pZDtcbmV4cG9ydCB0eXBlIEVycm9yQ2FsbGJhY2s8VD4gPSAocmVzdWx0PzogVCkgPT4gdm9pZDtcbiJdfQ==