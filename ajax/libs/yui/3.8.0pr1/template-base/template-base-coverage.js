if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/template-base/template-base.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/template-base/template-base.js",
    code: []
};
_yuitest_coverage["build/template-base/template-base.js"].code=["YUI.add('template-base', function (Y, NAME) {","","/**","Virtual rollup of the `template-base` and `template-micro` modules.","","@module template","@main template","@since 3.8.0","**/","","/**","Provides a generic API for using template engines such as Handlebars and","`Y.Template.Micro`.","","@module template","@submodule template-base","@since 3.8.0","**/","","/**","Provides a generic API for using template engines such as Handlebars and","`Y.Template.Micro`.","","### Examples","","Using with `Y.Template.Micro` (the default template engine):","","    YUI().use('template', function (Y) {","        var micro = new Y.Template(),","            html  = micro.render('<%= data.message %>', {message: 'hello!'});","","        // ...","    });","","Using with Handlebars:","","    YUI().use('template-base', 'handlebars', function (Y) {","        var handlebars = new Y.Template(Y.Handlebars),","            html       = handlebars.render('{{message}}', {message: 'hello!'});","","        // ...","    });","","@class Template","@param {Mixed} [engine=Y.Template.Micro] Template engine to use, such as","    `Y.Template.Micro` or `Y.Handlebars`. Defaults to `Y.Template.Micro` if not","    specified.","@constructor","@since 3.8.0","**/","","function Template(engine) {","    /**","    Template engine class.","","    @property {Mixed} engine","    @since 3.8.0","    **/","    this.engine = engine || Y.Template.Micro;","","    if (!this.engine) {","        Y.error('No template engine loaded.');","    }","}","","Template.prototype = {","    /**","    Compiles a template with the current template engine and returns a compiled","    template function.","","    @method compile","    @param {String} text Template text to compile.","    @param {Object} [options] Options to pass along to the template engine. See","        template engine docs for options supported by each engine.","    @return {Function} Compiled template function.","    @since 3.8.0","    **/","    compile: function (text, options) {","        return this.engine.compile(text, options);","    },","","    /**","    Precompiles a template with the current template engine and returns a string","    containing JavaScript source code for the precompiled template.","","    @method precompile","    @param {String} text Template text to compile.","    @param {Object} [options] Options to pass along to the template engine. See","        template engine docs for options supported by each engine.","    @return {String} Source code for the precompiled template.","    @since 3.8.0","    **/","    precompile: function (text, options) {","        return this.engine.precompile(text, options);","    },","","    /**","    Compiles and renders a template with the current template engine in a single","    step, and returns the rendered result.","","    @method render","    @param {String} text Template text to render.","    @param {Object} data Data object to provide when rendering the template.","    @param {Object} [options] Options to pass along to the template engine. See","        template engine docs for options supported by each engine.","    @return {String} Rendered result.","    @since 3.8.0","    **/","    render: function (text, data, options) {","        if (this.engine.render) {","            return this.engine.render(text, data, options);","        }","","        return this.engine.compile(text, options)(data, options);","    },","","    /**","    Revives a precompiled template function into an executable template function","    using the current template engine. The precompiled code must already have","    been evaluated; this method won't evaluate it for you.","","    @method revive","    @param {Function} precompiled Precompiled template function.","    @param {Object} [options] Options to pass along to the template engine. See","        template engine docs for options supported by each engine.","    @return {Function} Compiled template function.","    @since 3.8.0","    **/","    revive: function (precompiled, options) {","        return this.engine.revive ? this.engine.revive(precompiled, options) :","                precompiled;","    }","};","","// Copy existing namespaced properties from Y.Template to the Template function","// if Y.Template already exists, then make the function the new Y.Template.","// This ensures that other modules can safely add stuff to the Y.Template","// namespace even if they're loaded before this one.","Y.Template = Y.Template ? Y.mix(Template, Y.Template) : Template;","","","}, '@VERSION@', {\"requires\": [\"yui-base\"]});"];
_yuitest_coverage["build/template-base/template-base.js"].lines = {"1":0,"52":0,"59":0,"61":0,"62":0,"66":0,"79":0,"94":0,"110":0,"111":0,"114":0,"130":0,"139":0};
_yuitest_coverage["build/template-base/template-base.js"].functions = {"Template:52":0,"compile:78":0,"precompile:93":0,"render:109":0,"revive:129":0,"(anonymous 1):1":0};
_yuitest_coverage["build/template-base/template-base.js"].coveredLines = 13;
_yuitest_coverage["build/template-base/template-base.js"].coveredFunctions = 6;
_yuitest_coverline("build/template-base/template-base.js", 1);
YUI.add('template-base', function (Y, NAME) {

/**
Virtual rollup of the `template-base` and `template-micro` modules.

@module template
@main template
@since 3.8.0
**/

/**
Provides a generic API for using template engines such as Handlebars and
`Y.Template.Micro`.

@module template
@submodule template-base
@since 3.8.0
**/

/**
Provides a generic API for using template engines such as Handlebars and
`Y.Template.Micro`.

### Examples

Using with `Y.Template.Micro` (the default template engine):

    YUI().use('template', function (Y) {
        var micro = new Y.Template(),
            html  = micro.render('<%= data.message %>', {message: 'hello!'});

        // ...
    });

Using with Handlebars:

    YUI().use('template-base', 'handlebars', function (Y) {
        var handlebars = new Y.Template(Y.Handlebars),
            html       = handlebars.render('{{message}}', {message: 'hello!'});

        // ...
    });

@class Template
@param {Mixed} [engine=Y.Template.Micro] Template engine to use, such as
    `Y.Template.Micro` or `Y.Handlebars`. Defaults to `Y.Template.Micro` if not
    specified.
@constructor
@since 3.8.0
**/

_yuitest_coverfunc("build/template-base/template-base.js", "(anonymous 1)", 1);
_yuitest_coverline("build/template-base/template-base.js", 52);
function Template(engine) {
    /**
    Template engine class.

    @property {Mixed} engine
    @since 3.8.0
    **/
    _yuitest_coverfunc("build/template-base/template-base.js", "Template", 52);
_yuitest_coverline("build/template-base/template-base.js", 59);
this.engine = engine || Y.Template.Micro;

    _yuitest_coverline("build/template-base/template-base.js", 61);
if (!this.engine) {
        _yuitest_coverline("build/template-base/template-base.js", 62);
Y.error('No template engine loaded.');
    }
}

_yuitest_coverline("build/template-base/template-base.js", 66);
Template.prototype = {
    /**
    Compiles a template with the current template engine and returns a compiled
    template function.

    @method compile
    @param {String} text Template text to compile.
    @param {Object} [options] Options to pass along to the template engine. See
        template engine docs for options supported by each engine.
    @return {Function} Compiled template function.
    @since 3.8.0
    **/
    compile: function (text, options) {
        _yuitest_coverfunc("build/template-base/template-base.js", "compile", 78);
_yuitest_coverline("build/template-base/template-base.js", 79);
return this.engine.compile(text, options);
    },

    /**
    Precompiles a template with the current template engine and returns a string
    containing JavaScript source code for the precompiled template.

    @method precompile
    @param {String} text Template text to compile.
    @param {Object} [options] Options to pass along to the template engine. See
        template engine docs for options supported by each engine.
    @return {String} Source code for the precompiled template.
    @since 3.8.0
    **/
    precompile: function (text, options) {
        _yuitest_coverfunc("build/template-base/template-base.js", "precompile", 93);
_yuitest_coverline("build/template-base/template-base.js", 94);
return this.engine.precompile(text, options);
    },

    /**
    Compiles and renders a template with the current template engine in a single
    step, and returns the rendered result.

    @method render
    @param {String} text Template text to render.
    @param {Object} data Data object to provide when rendering the template.
    @param {Object} [options] Options to pass along to the template engine. See
        template engine docs for options supported by each engine.
    @return {String} Rendered result.
    @since 3.8.0
    **/
    render: function (text, data, options) {
        _yuitest_coverfunc("build/template-base/template-base.js", "render", 109);
_yuitest_coverline("build/template-base/template-base.js", 110);
if (this.engine.render) {
            _yuitest_coverline("build/template-base/template-base.js", 111);
return this.engine.render(text, data, options);
        }

        _yuitest_coverline("build/template-base/template-base.js", 114);
return this.engine.compile(text, options)(data, options);
    },

    /**
    Revives a precompiled template function into an executable template function
    using the current template engine. The precompiled code must already have
    been evaluated; this method won't evaluate it for you.

    @method revive
    @param {Function} precompiled Precompiled template function.
    @param {Object} [options] Options to pass along to the template engine. See
        template engine docs for options supported by each engine.
    @return {Function} Compiled template function.
    @since 3.8.0
    **/
    revive: function (precompiled, options) {
        _yuitest_coverfunc("build/template-base/template-base.js", "revive", 129);
_yuitest_coverline("build/template-base/template-base.js", 130);
return this.engine.revive ? this.engine.revive(precompiled, options) :
                precompiled;
    }
};

// Copy existing namespaced properties from Y.Template to the Template function
// if Y.Template already exists, then make the function the new Y.Template.
// This ensures that other modules can safely add stuff to the Y.Template
// namespace even if they're loaded before this one.
_yuitest_coverline("build/template-base/template-base.js", 139);
Y.Template = Y.Template ? Y.mix(Template, Y.Template) : Template;


}, '@VERSION@', {"requires": ["yui-base"]});
