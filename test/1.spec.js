describe('Angular Language Picker', function(){
    beforeEach(module('language-picker'));

    it('should have langMap.', inject(function(langMap){
        expect(langMap).not.to.be.undefined;
    }));
});
