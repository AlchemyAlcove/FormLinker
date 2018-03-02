import test from "ava";
import FormLinker from "../index";

test("test", t => {
  let fl = new FormLinker({
    data: {
      foo: "bar"
    }
  });

  t.deepEqual(fl.getFieldFormValue("foo"), "bar");
  t.deepEqual(fl.isValid(), true);
});

test("Deep Data", t => {
  let fl = new FormLinker({
    data: {
      foo: {
        bar: "Test"
      }
    }
  });

  t.is(fl.getFieldFormValue("foo.bar"), "Test");
  t.deepEqual(fl.isValid(), true);
});

test("Is a Boolean", t => {
  let fl = new FormLinker({
    data: {
      foo: {
        bar: true
      }
    }
  });

  t.is(fl.getFieldFormValue("foo.bar"), true);
  t.deepEqual(fl.isValid(), true);
});

test("Is a empty Array", t => {
  let fl = new FormLinker({
    data: {
      foo: {
        bar: []
      }
    }
  });

  t.is(fl.getFieldFormValue("foo.bar").length, 0);
  t.deepEqual(fl.isValid(), true);
});

test("Is a Boolean", t => {
  let fl = new FormLinker({
    data: {
      foo: {
        bar: 42
      }
    }
  });

  t.is(fl.getFieldFormValue("foo.bar"), 42);
  t.deepEqual(fl.isValid(), true);
});

test("Deep Data", t => {
  let fl = new FormLinker({
    data: {
      foo: {
        bar: "Test"
      }
    }
  });

  t.is(fl.getFieldParsedValue("foo.bar"), "Test");
  t.deepEqual(fl.isValid(), true);
});

test("Is a Boolean", t => {
  let fl = new FormLinker({
    data: {
      foo: {
        bar: true
      }
    }
  });

  t.is(fl.getFieldParsedValue("foo.bar"), true);
  t.deepEqual(fl.isValid(), true);
});

test("Is a empty Array", t => {
  let fl = new FormLinker({
    data: {
      foo: {
        bar: []
      }
    }
  });

  t.is(fl.getFieldParsedValue("foo.bar").length, 0);
  t.deepEqual(fl.isValid(), true);
});

test("Is a Boolean", t => {
  let fl = new FormLinker({
    data: {
      foo: {
        bar: 42
      }
    }
  });

  t.is(fl.getFieldParsedValue("foo.bar"), 42);
  t.deepEqual(fl.isValid(), true);
});
