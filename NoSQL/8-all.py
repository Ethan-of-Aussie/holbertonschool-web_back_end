#!/usr/bin/env python3
"""Defines list_all"""


from pymongo import MongoClient


def list_all(mongo_collection):
    """Return a list of all documents"""
    if not mongo_collection:
        return []

    return list(mongo_collection.find())
