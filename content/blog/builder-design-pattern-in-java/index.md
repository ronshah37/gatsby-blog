---
title: Builder Design Pattern in Java
date: "2021-08-16T11:26:37.121Z"
updated: "2021-08-22T22:36:37.121Z"
image: "https://i2.wp.com/blog.knoldus.com/wp-content/uploads/2020/06/download-1.png?fit=292%2C173&ssl=1"
---

![alt text](https://i2.wp.com/blog.knoldus.com/wp-content/uploads/2020/06/download-1.png?fit=292%2C173&ssl=1 "Builder Design Pattern")

We have already discussed two of the Creational Design Pattern that is [Singleton](https://blog.knoldus.com/singleton-pattern-java-design-pattern-2/) and [Factory](https://blog.knoldus.com/factory-pattern-java-design-pattern-3/). Here, we just come up with another type of Creational Design Pattern that is **Builder**.

## What is Builder Design Pattern?

Builder Design Pattern is a creational Design Pattern which is used to create the complex object. Its main purpose is to :

1. Segregate the object creation part in a separate Builder object.
2. Instead of creating the object directly, we are just delegating the object creation part to the Builder object.

## Why the Builder Design pattern?

I know this is quite confusing because in the Factory pattern we were also isolating the object creation part. So, what’s the basic difference builder and factory in which we both were segregating the object creation.

Actually, a Builder pattern is introduced to solve some of the problems that we face while using the Factory pattern when Object contains lots of attributes.

**Problem 1:** Suppose our object contains lots of attributes, then we have to pass all the arguments from the Client code to the factory class. And if most of the arguments are of the same type(that generally happens), then this is quite tedious to maintain the order of the arguments.

**Problem 2:** What if some of the parameters are Optional, but while using Factory pattern we have to supply all the arguments from the client code (the mandatory one and the optional one as NULL).

**Problem 3:** Don’t you think it has made our Factory class complicated. It is quite confusing too. Isn’t it?
Okay, wait I have one solution, other than this Builder Design Pattern
So, what about having parameterized constructor with all the required arguments and then different setter method to set the value of optional parameters.

But this approach will make my object state as inconsistent. Isn’t it? I can mutate my object very easily 🙁

So, do you have another solution that can solve all the three problems?
I can see only the builder pattern in my scenario which help me to create immutable classes having lots of attributes.

Let’s understand how we can implement a Builder pattern using an example.

```
class Person {

    private final String firstName; // required
    private final int age;
    private final String phone;

     private Person(PersonBuilder builder) {
        this.firstName = builder.firstName;
        this.age = builder.age;
        this.phone = builder.phone;
    }

    public String getFirstName() {
        return firstName;
    }

    public int getAge() {
        return age;
    }

    public String getPhone() {
        return phone;
    }

     @Override
     public String toString() {
         return "Person{" +
                 "firstName='" + firstName + '\'' +
                 ", age=" + age +
                 ", phone='" + phone + '\'' +
                 '}';
     }

     //Builder class
     public static class PersonBuilder
    {
        private final String firstName;
        private int age;
        private String phone;

        public PersonBuilder(String firstName) {
            this.firstName = firstName;
        }
        public PersonBuilder age(int age) {
            this.age = age;
            return this;
        }
        public PersonBuilder phone(String phone) {
            this.phone = phone;
            return this;
        }

        public Person build() {
            return new Person(this);
        }

    }

     public static void main(String[] args) {
         //Creating an Object
         Person person = new Person.PersonBuilder("Bhawna")
                 .age(23)
                 .phone("1234567")
                 .build();

         System.out.println(person);

     }
 }

```

In above example, we have taken one Person class in which name is mandatory and age and phone number are optional. And we are creating one builder class PersonBuilder which is creating Person object. Moreover, we are not forced to pass optional parameters while creating an object. So, all three problems discussed above have been solved by the builder design pattern.

## Conclusion

So, builder design pattern eases out the complex object creation. And it separates out the creation of an object and representation. We also looked into the problems of Factory design pattern and how builder design pattern can opt to overcome those problems.

Please feel free to provide your suggestions. 🙂 Please comment if you have some queries and want to add some points.

## References:

[Journal Dev Link](https://www.journaldev.com/)
