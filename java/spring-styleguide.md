# Akveo Spring styleguide

## Table of content

1. [Project Structure](#project-structure)
2. [Spring syntax rules](#spring-syntax-rules)
3. [External Libraries](#external-libraries)


### Project Structure
1. Initial project structure should be corresponded with [Maven standard directory layout](https://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html)
2. Project components should be divided by feature. For example:
```
com.demo.project 
└───user
│   │
│   └───component
│   │   │ UserComponent.java
│   │   │ UserMetaDataComponent.java
│   │   │ ...
│   │
│   └───service
│   │   │UserService.java
│   │   │UserPaymentService.java
│   │   │ ...
│   │  
│   └───model
│       │User.java
│         ...
```

### Spring syntax rules
1. Interface definitions shouldn't be prefixed with `I`.
2. All public methods should be written at the top of the class, all private method at the bottom
3. All ORM Entities should have a postfix entity in the definition. It helps divide dto classes and entities
4. Use DTO classes without postfix DTO


### External libraries
1. If that possible - use Lombok library for Java boilerplate code generation
    * ***important*** Don't use Lombok `@EqualsAndHashCode` method for ORM entities.
2. Use db migration tools when you have to change the db structure. (e.g. flyway or liquibase)
3. Use checkstyle plugin with predefined rules. <!-- need to provide the default checkstyle rules -->
