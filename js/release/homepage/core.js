// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('homepage.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
homepage.core.colors = new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dark-red","red","orange","gold","yellow","purple","light-purple","hot-pink","dark-pink","pink","dark-green","green","navy","dark-blue","blue","light-blue","lightest-blue","washed-blue","washed-green","washed-yellow","light-pink","light-yellow","light-red"], null);
homepage.core.get_random_color = (function homepage$core$get_random_color(color){
var n = cljs.core.rand_int((cljs.core.count(homepage.core.colors) - (1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(color,cljs.core.get.cljs$core$IFn$_invoke$arity$2(homepage.core.colors,n))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(homepage.core.colors,n);
} else {
return (homepage.core.get_random_color.cljs$core$IFn$_invoke$arity$1 ? homepage.core.get_random_color.cljs$core$IFn$_invoke$arity$1(color) : homepage.core.get_random_color.call(null,color));
}
});
homepage.core.color_clicker = (function homepage$core$color_clicker(){
var color_to_show = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("orange");
return ((function (color_to_show){
return (function (){
var G__10780_10782 = ((function (color_to_show){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(color_to_show,homepage.core.get_random_color);
});})(color_to_show))
;
var G__10781_10783 = (1000);
setTimeout(G__10780_10782,G__10781_10783);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code$pa1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.deref(color_to_show)], null),"clojurescript"], null);
});
;})(color_to_show))
});
homepage.core.intro = (function homepage$core$intro(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$f3$grey$tc$pa2$sans_DASH_serif,"This is a sample app made in ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage.core.color_clicker], null)], null);
});
homepage.core.reagent_link = (function homepage$core$reagent_link(){
var color_to_show = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("black");
return ((function (color_to_show){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.deref(color_to_show),cljs.core.cst$kw$on_DASH_click,((function (color_to_show){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(color_to_show,homepage.core.get_random_color);
});})(color_to_show))
], null),"Welcome to Reagent"], null);
});
;})(color_to_show))
});
homepage.core.home_page = (function homepage$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_white$br2$pa4$ma5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$tc$pt4$helvetica,"Welcome to Reagent"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage.core.intro], null)], null);
});
homepage.core.mount_root = (function homepage$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [homepage.core.home_page], null),document.getElementById("app"));
});
homepage.core.init_BANG_ = (function homepage$core$init_BANG_(){
return homepage.core.mount_root();
});
