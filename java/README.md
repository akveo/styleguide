# Akveo Java styleguide

### Table of content

- [Java styleguide](#java-styleguide)
  - [Java Syntax](#java-syntax)
- [Spring styleguide](#spring-styleguide) 
  - [Project Structure](#project-structure) 
  - [Spring syntax rules](#spring-syntax-rules) 
  - [External libraries](#external-libraries)
- [How to integrate Checkstyle into a Java project](#how-to-integrate-checkstyle-into-a-java-project)
    - [Maven Configuration](#maven-configuration)

## Java styleguide

### Java Syntax
1. When writing Akveo Java checkstyle rules, we based on the [approach](https://google.github.io/styleguide/javaguide.html) from the Google team.
   You can download Akveo checkstyle.xml and install this rules for IDEs:
   * [Intellij idea](https://wiki.lyrasis.org/display/DSPACE/Code+Style+Guide#CodeStyleGuide-IntelliJIDEA)
   * [Eclipse settings](https://wiki.lyrasis.org/display/DSPACE/Code+Style+Guide#CodeStyleGuide-Eclipse)

## Spring styleguide

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


## How to integrate Checkstyle into a Java project 

### Maven Configuration

1. Download Akveo checkstyle.xml.
2. Add this file to your project.
3. Add the Checkstyle Plugin in the <reporting> section of your pom.xml.
```
<reporting>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-checkstyle-plugin</artifactId>
            <version>3.1.2</version>
            <configuration>
                <configLocation>checkstyle.xml</configLocation>
            </configuration>
        </plugin>
    </plugins>
</reporting>
```
3. Also need to add a <pluginManagement> section to your pom.xml with the appropriate configuration. 
Maven Checkstyle plugin comes with a default Checkstyle version 8.29, but some rules require a newer version.
```
<pluginManagement>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-checkstyle-plugin</artifactId>
            <version>3.1.2</version>
            <dependencies>
                <dependency>
                    <groupId>com.puppycrawl.tools</groupId>
                    <artifactId>checkstyle</artifactId>
                    <version>10.3</version>
                </dependency>
            </dependencies>
       </plugin>
    </plugins>
</pluginManagement>
```
4. Then, execute the site phase to generate the report.
```
mvn site
```

## Checking for Violations as Part of the Build

If there's a need to have stringent checks on the coding style, we can configure the plugin in such a way that the
build fails when the code does not follow certain rules.

We do this by adding an execution goal to our plugin definition:

```
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-checkstyle-plugin</artifactId>
    <version>3.1.2</version>
    <configuration>
        <configLocation>checkstyle.xml</configLocation>
    </configuration>
    <executions>
        <execution>
            <goals>
                <goal>check</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```
