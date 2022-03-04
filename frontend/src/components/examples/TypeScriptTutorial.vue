<template>
  <div class="foo">
    TypeTest
    <input id="num1" type="number" placeholder="Number 1" />
    <input id="num2" type="number" placeholder="Number 2" />
    <button class="bg-blue-600">Add!</button>
  </div>
</template>
<script lang="ts">
import { onMounted } from "vue"

// using simple integers
function add(n1: number, n2: number) {
  return n1 + n2
}

// using union types
function combine(input1: number | string, input2: number | string) {
  if (typeof input1 !== typeof input2) {
    throw new TypeError("Messed up the types, can only combine two same types")
  }
  // const result = input1 + input2  // this will throw a warning, because '+' is ambivalent now
  // so we're using let with a union here
  let result: string | number = ""
  if (typeof input1 === "string" && typeof input2 === "string") {
    result = input1.toString() + input2.toString()
  }
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2
  }
  return result
}

// define custom types
type FloatConversionDescriptorType = "unary" | "number" | "parsefloat"

function convertToFloat(foo: unknown, returnResultAsType: FloatConversionDescriptorType) {
  // literal types
  // three methods of returning a value as a number
  // ...
  // prettier-ignore
  if (returnResultAsType === "unary") {
    // +''     // NaN
    // +'123a' // NaN
    // +{}     // NaN
    return +foo
  }
  else if (returnResultAsType === "number") {
    // converts to:
    // Number('3.23abc'); //=> NaN
    // Number('   3.23 '); //=> 3.23
    return Number(foo)
  }
  else if (returnResultAsType === "parsefloat") {
    // converts to:
    // parseFloat('3.23abc'); //=> 3.23
    // parseFloat('  3.23abc '); //=> 3.23
    return parseFloat(foo)
  }
}

function returnVoid(): void { // can be more precisely written as: function returnVoid(): undefined {
  console.log("Does something, but does not return something")
  // can be more precisely written as:
  // return undefined
  // or
  // return;
}

// using an arrow-function to do a callback function
function callsaCallback(int: number, callback: (int: number) => void) {
  const result = 2 * int
  callback(result)
}

// never returns a value
function generateError(message: string, code: number): never {
  console.log({ message: message, errorCode: code })
  // while (true) {} // loops forever and does never return
}

export default {
  setup() {
    onMounted(() => {
      // get an element
      const button = document.querySelector("button")
      // define an element as given with '!' and alias is with 'as'
      // for instance: HTMLElements do not have a value, but the extended HTMLInputElements do, so as we're using the value later, we make sure it's an inputElement
      const input1 = document.getElementById("num1")! as HTMLInputElement
      const input2 = document.getElementById("num2")! as HTMLInputElement

      // using some datatypes
      let zonk: any // don't :D - just use it, if we really don't know what data will be behind the zonk
      enum Role {
        ADMIN,
        OWNER = "ownerkey",
        USER = 100
      } // <- key to value
      // define objects like this (you won't do it this way, but it explains the types TypeScript is using clearly)
      const person: {
        name: string
        age: number
        hobbies: string[]
        smart: boolean
        role_tuple: [number, string] // <- tuple of exactly 2 elements
        role: Role
      } = {
        name: "Tom",
        age: 23,
        smart: false,
        hobbies: ["golf", "hockey"],
        role_tuple: [1, "admin"],
        role: Role.ADMIN // human readable
      }

      // map with an arrow-function
      console.log(person.hobbies.map((item) => item.length))

      console.log(convertToFloat("34s", "unary")) // pay attention to NaN values!

      // you can let all sorts of different values shine
      let moo: undefined
      let boo: Function
      boo = returnVoid
      console.log(boo())

      // variables can be of a unknown type. Note: unknown is stricter than any (because it does not allow defined types, if not checked for it!)
      let inputFoo: unknown
      let inputString: string
      inputFoo = "foobar"
      if (typeof inputFoo === "string") {
        inputString = inputFoo
      }

      // combine checks for input types..
      console.log(combine("13", "37"))
      console.log(combine(21, 21))
      console.log(combine(moo, 23)) // this should lint / throws the error as expected :)

      // iteration
      for (const hobby of person.hobbies) {
        console.log(hobby.toUpperCase())
      }

      // play js..
      // prettier-ignore
      button.addEventListener("click", function () {
        let valueOrNan1 = Number(input1.value)  // if value is empty value will be NaN
        let valueOrNan2 = Number(input2.value)  // if value is empty value will be NaN
        if (isNaN(valueOrNan1) || isNaN(valueOrNan2)) {
          console.log("found a nan-value")
        }
        let valueOrZero1 = +input1.value         // if value is empty value will be 0
        let valueOrZero2 = +input2.value         // if value is empty value will be 0

        console.log(add(valueOrZero1, valueOrZero2))
      })

      console.log(person.name)

      // the Never-Type
      // generateError("An Error occured - Provoked infinite loop :)", 500)
    })
  }
}
</script>
