# pet-shop

## Grupo 22

Vinicius Soares Martins - 11794907

Érica Ribeiro Filgueira dos Santos - 11836351

# Project Report

## Requirements

- The system must have 2 types of users: Clients and Administrators
    - Administrators are responsible for registering/managing administrators, customers, and products/services provided. The application already comes with an account admin with password admin.

    - Customers are users who access the system to buy products/services.
  
- The admin record includes, at least: name, id, phone, email.

- Each customer's record includes, at least: name, id, address, phone, email
Product/services records include, at least: name, id, photo, description, price, quantity (in stock), quantity sold.

- Your store may sell products, services or both (you decide)

- Selling Products (or services): Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.

- Product/Service Management: Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity.

- Your functionality: Create a functionality that is specific to your application. It does not have to be something complicated. For instance, if you are selling cars, you may allow users to use an accelerator to hear how each car engine roars up and down.

- The system must provide accessibility requirements and provide good usability. The system must be responsive.

## Project Description

## Test Plan

## Test Results

## Build Procedures

## Problems

## Comments


<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=5,IE=9" ><![endif]-->
<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#333333&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers tags lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2022-04-20T23:02:16.325Z\&quot; agent=\&quot;5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36\&quot; etag=\&quot;z4oqndS-kRKSvf9lcWVO\&quot; version=\&quot;17.4.0\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;4NbezVEoMbVdDVVs61qf\&quot; name=\&quot;Page-1\&quot;&gt;7VtNd5s6EP01LNsDyIC9THDSLtrTnJNFk6UekkGvgFwhx3Z+/ZOQMF+Ji+sU4b5sMBokIc2dOzMSsgXCbPeJwXXylSKcWq6NdhZYWq7rACcQP1KyVxLfc5QgZgTpSrXgnjxjLbS1dEMQLloVOaUpJ+u2MKJ5jiPekkHG6LZdbUXT9lvXMMY9wX0E0770O0E8UdK5G9Tyz5jESfVmx1+oJxmsKuuZFAlEdNsQgRsLhIxSru6yXYhTqbxKL6rd7StPDwNjOOdDGuy+PrLHh+Lmwyb1N1v4bfkzevjg6bHxfTVhjMT8dZEyntCY5jC9qaXXjG5yhGWvtijVdb5QuhZCRwj/xZzvNZhww6kQJTxL9VMxYLZ/0O3LwqMsfPSq4nLXfLjcH0roSkIqijnNsZLckjTVz9Vc5AReVZEWFXTDInxEL5WpQRZjfqQeOAApGIBphsV4RTuGU8jJU3scUJtifKhXoyVuNGAngFdxpIHe+djsCH9o3D827mtYZGHfxKiP5i+wLDijP3BIU8qEBOEV3KR8mhgHRjF2jjJU66iG3TmXkjUL/zIYZ0ZhdMeBUbPXPp29zl8Ku2sUdtXvE0w3+k2fRc9HvLZEYZsQju/XsJz+VqRVbYx1l5hxvDuuxf6sqwbzmWqyr8o6kmzrFMep8pakkd749p9SlD8uP5SXOzG+neYaf8WF1zj0hhxxB3LEN8qRxajQNxOb2gxOSm3OTlQnBL3RqOj23GMIo4QK1Zl3kXbLQwLbtIcEYNKJ4ARMHgzNCDyTNg96Nv+FxiS3pDHdius9iXNZNGz//qJNgAmkCMF7ivD2pJkNJM3caJzob3S8pwijQW90/2PWc5efIJ9AetBZQZnPD2bjptG/5x4vzDn6AxniGN0G9nsUuWMUbabAknYOMXNNk8SZXwBJLi6HCAbSZGGSJUGfJVYIrCunKOAE1pvABx+9iYUUb9y063/ClvlFBJX5dINKJ/UyH1WqIw1T5slJn3cmwJLFRbBkMVmW9OOJeZ4AdxyemLdeZ+heJHgFxZE+vfQ3I0PIGMkT8wbcdfOe8Q1IcAkr7ItLh1xvKFWMbkHORs6F36FvQm/2K6XX85LqFIcdpkRM2vx5ju7HGvOh3p2yr/yzhn+Gmeqmd5SIHg/oBl4bXd/toKaIplvVwJ3ekSJir6PSAg7zOSOA9o9D3RIBN3mGzJJHuLM1g8bJ1E08AuP7MKD/EWQJES2E6A4XBYWkMK41b9a2Lc8zrrUXtjAwIqXeJuavzSvLc3vK+iaKiMCYwQzKWxnwcviEY1jumwblFYiFgr2iRF4xketee43zAuZI3ubyEsFMLSjECDBMmzVZ+bwKovYKPmPpCGDDGdhI11Sr6lAWqLR3m1MEC6ULIVN7ubFwJ7JY1INLSf4DqpqlUGjQfvEQpoCTt5EWninOxX0kxyeCwbUEnUQwvdIPMoKQ+ksELoQT+6fsSsaQtXShJUbeteUtZV9i+IUKY04vyOg4tBJBqCN6A2PrHPV8ITWYv2Rq3dgwwNREsf47iwoa9Z+CwM1/&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<script type="text/javascript" src="https://viewer.diagrams.net/js/viewer-static.min.js"></script>
