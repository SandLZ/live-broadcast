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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HMLiveBroadcastOriginal = /** @class */ (function (_super) {
    __extends(HMLiveBroadcastOriginal, _super);
    function HMLiveBroadcastOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMLiveBroadcastOriginal.prototype.startLiveBroadcast = function (options, success, error) { return cordova(this, "startLiveBroadcast", {}, arguments); };
    HMLiveBroadcastOriginal.pluginName = "LiveBroadcast";
    HMLiveBroadcastOriginal.plugin = "cordova-plugin-live-broadcast";
    HMLiveBroadcastOriginal.pluginRef = "cordova.plugins.LiveBroadcast";
    HMLiveBroadcastOriginal.repo = "";
    HMLiveBroadcastOriginal.install = "ionic cordova plugin add cordova-plugin-live-broadcast";
    HMLiveBroadcastOriginal.installVariables = [];
    HMLiveBroadcastOriginal.platforms = ["Android", "iOS"];
    return HMLiveBroadcastOriginal;
}(IonicNativePlugin));
var HMLiveBroadcast = new HMLiveBroadcastOriginal();
export { HMLiveBroadcast };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xpdmUtYnJvYWRjYXN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUlOLE1BQU0sb0JBQW9CLENBQUM7O0lBWVMsbUNBQWlCOzs7O0lBR3BELDRDQUFrQixhQUFDLE9BQStCLEVBQUUsT0FBOEIsRUFBRSxLQUEyQjs7Ozs7Ozs7MEJBcEJqSDtFQWlCcUMsaUJBQWlCO1NBQXpDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQbHVnaW4sXG4gIENvcmRvdmEsXG4gIElvbmljTmF0aXZlUGx1Z2luXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTGl2ZUJyb2FkY2FzdCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWxpdmUtYnJvYWRjYXN0JyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLkxpdmVCcm9hZGNhc3QnLFxuICByZXBvOiAnJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1saXZlLWJyb2FkY2FzdCcsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITUxpdmVCcm9hZGNhc3QgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgQENvcmRvdmEoKVxuICBzdGFydExpdmVCcm9hZGNhc3Qob3B0aW9uczogSE1MaXZlQnJvYWRjYXN0T3B0aW9ucywgc3VjY2Vzcz86IFN1Y2Nlc3NDYWxsYmFjazxhbnk+LCBlcnJvciA/OiBFcnJvckNhbGxiYWNrPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSE1MaXZlQnJvYWRjYXN0T3B0aW9ucyB7XG4gIC8vIOagh+mimFxuICB0aXRsZTogc3RyaW5nO1xuICBuZWVkVGl0bGU6IGJvb2xlYW47XG4gIC8vIOiHquWKqOaSreaUvlxuICBhdXRvUGxheTogYm9vbGVhbjtcbiAgLy8gMSDlupTmgKXnm7Tmkq0o5o6o5rWBKSAyIOeJuee6p+ebtOaSrSjlj6/mjqjmtYHvvIzlj6/mkq3mlL4pXG4gIHR5cGU6IG51bWJlcjtcbiAgLy8g5piv5ZCm5piv6KeC5LyXXG4gIGlzVmlld2VyOiBib29sZWFuO1xuICAvLyDmkq3mlL7lnLDlnYBcbiAgcGxheVVybDogc3RyaW5nO1xuICAvLyDmjqjmtYHlnLDlnYBcbiAgcHVzaFVybDogc3RyaW5nO1xuICAvLyDnlKjmiLflkI0o55u05pKt5Lq6KVxuICB1c2VyTmFtZTogc3RyaW5nO1xuICAvLyDosIPor5UgKOW8gOWQr+iwg+ivleaooeW8j+WQju+8jOaJk+W8gOWPguaVsOiwg+ivleeVjOmdoilcbiAgZGVidWc6IGJvb2xlYW47XG4gIC8vIOaRhOWDj+WktCjpu5jorqTlkI7nva4pIDAg5YmN572uXG4gIGNhbWVyYURlZmF1bHQ6IG51bWJlcjtcbiAgLy8g56Gs6Kej56CBKOm7mOiupOW8gClcbiAgZGVjb2RlRGVmYXVsdDogYm9vbGVhbjtcbiAgLy8g6Ieq5Yqo5a+554SmKOm7mOiupOW8gClcbiAgZm9jdXNEZWZhdWx0OiBib29sZWFuO1xuICAvLyDliIbovqjnjoco6buY6K6kNzIwUClcbiAgcmVzb2x1dGlvbkRlZmF1bHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgU3VjY2Vzc0NhbGxiYWNrPFQ+ID0gKHJlc3VsdD86IFQpID0+IHZvaWQ7XG5leHBvcnQgdHlwZSBFcnJvckNhbGxiYWNrPFQ+ID0gKHJlc3VsdD86IFQpID0+IHZvaWQ7XG4iXX0=