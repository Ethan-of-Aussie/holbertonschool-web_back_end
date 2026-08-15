#!/usr/bin/env python3
""" """


from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    log_collection = client.logs.nginx

    print(f"{log_collection.count_documents({})} logs")
    print("Methods:")

    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    for m in methods:
        print("    ", f"method {m}: {log_collection.count_documents({"method": m})}") 

    print(f"{log_collection.count_documents({"method": "GET", "path": "/status"})} status check")
